<template>
  <component :is="htmlTag" :class="['c-section', variantClasses]">
    <div class="c-section__inner l-container">
      <header v-if="title" class="c-section__header">
        <component
          :is="leadSection ? 'h1' : 'h2'"
          class="c-section__title u-text-uppercase"
        >
          {{ title }}
        </component>
      </header>
      <div class="c-section__intro l-flow" v-if="hasSlot('intro')">
        <slot name="intro" />
      </div>
      <div class="c-section__body l-flow">
        <slot />
      </div>
      <footer class="c-section__footer" v-if="hasSlot('footer')">
        <slot name="footer" />
      </footer>
    </div>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import type { VSectionProps } from './VSection.types';

  export default defineComponent({
    name: 'VueSection',
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
      leadSection: {
        type: Boolean,
      },
    },
    setup(props: VSectionProps, { slots }) {
      const hasSlot = (name: string) => !!slots[name];
      const htmlTag = props.as || (props.title ? `section` : `div`);
      const variantClasses = classNames(
        props.variants?.map((variant: string) => `c-section--${variant}`)
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

<style src="./VSection.css"></style>
