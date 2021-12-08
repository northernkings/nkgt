import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), svgLoader(), ssr()],
};

export default config;
