<template>
  <component :is="htmlTag" :class="['c-section', variantClasses]">
    <header v-if="title" class="c-section__header o-container">
      <component
        :is="leadSection ? 'h1' : 'h2'"
        class="c-section__title u-text-headline"
      >
        {{ title }}
      </component>
    </header>
    <div class="c-section__inner l-container">
      <slot />
    </div>
    <footer class="c-section__footer" v-if="hasSlot('footer')">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import { SectionProps } from './Section.types';

  export default defineComponent({
    name: 'Section',
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
    setup(props: SectionProps, { slots }) {
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

<style src="./Section.css"></style>
