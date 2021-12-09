<template>
  <div class="c-title-banner">
    <component :is="as || 'h1'" class="c-title-banner__title u-text-headline">
      {{ title }}
    </component>
  </div>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import { TitleBannerProps } from './TitleBanner.types';

  export default defineComponent({
    name: 'TitleBanner',
    props: {
      title: {
        type: String,
      },
      variants: {
        type: Array as PropType<Array<string>>,
      },
      as: {
        type: String,
      },
    },
    setup(props: TitleBannerProps) {
      const variantClasses = classNames(
        props.variants?.map((variant: string) => `c-title-banner--${variant}`)
      );
      return {
        ...props,
        variantClasses,
      };
    },
  });
</script>

<style src="./TitleBanner.css"></style>
