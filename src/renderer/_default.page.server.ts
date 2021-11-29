import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { createApp } from './app';
import type { PageContext } from './types';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import { getSiteData } from '~/data/site';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
  const siteData = await getSiteData;
  const app = createApp(pageContext, siteData);
  const appHtml = await renderToString(app);

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || siteData.title;
  const desc = (documentProps && documentProps.description) || '';

  const documentHtml: any = escapeInject`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>

        <link id="preload-fonts">
        <link id="inline-css">

      </head>
      <body>
        <div class="l-page" id="page">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>
  `;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
};
