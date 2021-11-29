import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import imageUrlBuilder from '@sanity/image-url';
import { slugify } from './slugify';
import fetch from 'cross-fetch';
import consola from 'consola';

interface QueryParams {
  [x: string]: string;
}

export interface SanityClientConfig {
  projectId: string;
  dataset: string;
  useCdn?: boolean;
  token?: string;
  apiVersion?: string;
}

export interface SanityClientWithCache {
  fetch: (query: string, parameters?: QueryParams) => Promise<any>;
}

const {
  VITE_SANITY_PROJECTID: projectId = '',
  VITE_SANITY_DATASET: dataset = '',
  VITE_SANITY_TOKEN: token = '',
  VITE_SANITY_API_VERSION: apiVersion = '2021-03-25',
} = import.meta.env;

const isProd = process.env.NODE_ENV === 'production';

export const sanityConfig = {
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: false,
} as SanityClientConfig;

const client = (clientConfig: SanityClientConfig): SanityClientWithCache => {
  const { useCdn, projectId, dataset, token, apiVersion } = clientConfig;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn && !hasToken ? 'apicdn.sanity.io' : 'api.sanity.io';
  const endpoint = `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (query: string, parameters: QueryParams = {}) => {
      const key = slugify(`${query}-${JSON.stringify(parameters)}`);

      if (isProd && cache.has(key)) {
        // return new Promise((resolve) => {
        //   cacheHits++;
        //   // eslint-disable-next-line no-console
        //   // consola.info('Sanity cache hit:', cacheHits, key);
        //   resolve(cache.get(key));
        // });
        return cache.get(key);
      }

      const queryUrl = new URL(endpoint);

      queryUrl.searchParams.set(`query`, query);

      if (Object.keys(parameters).length) {
        Object.keys(parameters).forEach((key) => {
          queryUrl.searchParams.set(`$${key}`, JSON.stringify(parameters[key]));
        });
      }

      const response = await fetch(queryUrl.toString(), {
        method: 'GET',
        headers: hasToken
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined,
      });

      if (response.status >= 400) {
        throw new Error([response.status, response.statusText].join(' '));
      }

      const { result } = await response.json();

      if (isProd) {
        cache.set(key, result);
      }

      return result;
    },
  };
};

export const sanityClient: SanityClientWithCache = client(sanityConfig);

export const sanityImageUrlBuilder: ImageUrlBuilder = imageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});
