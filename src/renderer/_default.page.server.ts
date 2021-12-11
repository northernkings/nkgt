import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { createApp } from './app';
import type { DocumentProps, PageContext } from './types';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import { siteData } from '~/data/site';
import { processMeta } from '~/utils/processMeta';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
  const app = createApp(pageContext, siteData);
  const appHtml = await renderToString(app);

  // See https://vite-plugin-ssr.com/html-head
  const documentProps = pageContext.pageExports.documentProps as DocumentProps;
  const title = documentProps?.title || siteData.title;
  const meta = processMeta(documentProps?.meta);

  const documentHtml: any = escapeInject`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        ${dangerouslySkipEscape(meta)}
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
