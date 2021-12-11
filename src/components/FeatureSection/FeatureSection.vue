<template>
  <component :is="htmlTag" :class="['c-feature-section', variantClasses]">
    <div class="c-feature-section__inner l-container">
      <div class="c-feature-section__content">
        <header v-if="title" class="c-feature-section__header o-container">
          <h2 class="c-feature-section__title u-text-uppercase">
            {{ title }}
          </h2>
        </header>
        <div class="c-feature-section__body l-flow">
          <slot />
        </div>
      </div>
      <div class="c-feature-section__media">
        <div class="c-feature-section__media__inner">
          <slot name="media" />
        </div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import type { FeatureSectionProps } from './FeatureSection.types';

  export default defineComponent({
    name: 'EditorialSection',
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
    setup(props: FeatureSectionProps, { slots }) {
      const hasSlot = (name: string) => !!slots[name];
      const htmlTag = props.as || (props.title ? `section` : `div`);
      const variantClasses = classNames(
        props.variants?.map(
          (variant: string) => `c-feature-section--${variant}`
        )
      );
      return {
        ...props,
        hasSlot,
        htmlTag,
        variantClasses,
      };
    },
  });
</script>

<style src="./FeatureSection.css"></style>
