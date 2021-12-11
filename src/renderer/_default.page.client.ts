import { getPage } from 'vite-plugin-ssr/client';
import { createApp } from './app';
import type { PageContext } from './types';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/types';
import { siteData } from '~/data/site';
import { scrollbarWidthVar } from '~/utils/scrollbarWidthVar';
import 'focus-visible';

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const app = createApp(pageContext, siteData);
  app.mount('#page');
  scrollbarWidthVar();
}

hydrate();
