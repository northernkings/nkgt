import { createSSRApp, defineComponent, h } from 'vue';
import LayoutBase from '../layouts/LayoutBase';
import type { PageContext } from './types';

// style resources
import '~/assets/styles/index.css';

export const createApp = (pageContext: PageContext, siteData: any) => {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        LayoutBase,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  // We make `pageContext` available in all components as `$pageContext`.
  // More infos: https://vite-plugin-ssr.com/pageContext-anywhere
  app.config.globalProperties.$pageContext = pageContext;
  app.config.globalProperties.$siteData = siteData;

  // console.log(JSON.stringify(siteData.publication, null, ' '));

  return app;
};
