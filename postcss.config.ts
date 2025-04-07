import type { Config } from "postcss-load-config";

const config: Config = {
  plugins: {
    // 'postcss-import': {},
    "postcss-at-rules-variables": {},
    "postcss-mixins": {},
    "postcss-nested": {},
    "postcss-custom-media": {},
    "postcss-pxtorem": {
      propWhiteList: [],
    },
    autoprefixer: {},
  },
};

export default config;
