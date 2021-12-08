<template>
  <component :is="htmlTag" :class="['c-section', modifierClasses]">
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
    <footer class="c-section__action" v-if="action">
      <a
        :href="action.link"
        class="c-section__action__link u-text-bold u-link-effect"
      >
        {{ action.label }}
      </a>
    </footer>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import { Section, SectionAction } from './Section.types';

  export default defineComponent({
    name: 'Section',
    props: {
      title: {
        type: String,
      },
      action: {
        type: Object as PropType<SectionAction>,
      },
      variants: {
        type: Array as PropType<Array<string>>,
      },
      flow: {
        type: Boolean,
        default: false,
      },
      as: {
        type: String,
      },
      leadSection: {
        type: Boolean,
      },
    },
    computed: {
      modifierClasses: ({ variants }: Section): string => {
        return classNames(
          variants && variants.map((variant: string) => `c-section--${variant}`)
        );
      },
      htmlTag: ({ as, title, showTitle }: Section): string => {
        return as || (title && showTitle ? `section` : `div`);
      },
    },
  });
</script>

<style src="./Section.css"></style>
