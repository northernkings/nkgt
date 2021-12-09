<template>
  <component :is="htmlTag" :class="['c-editorial-section', variantClasses]">
    <div class="c-editorial-section__inner l-container">
      <div class="c-editorial-section__content">
        <header v-if="title" class="c-editorial-section__header o-container">
          <h2 class="c-editorial-section__title u-text-uppercase">
            {{ title }}
          </h2>
        </header>
        <div class="c-editorial-section__body l-flow">
          <slot />
        </div>
      </div>
      <div class="c-editorial-section__media">
        <slot name="media" />
      </div>
    </div>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import { EditorialSectionProps } from './EditorialSection.types';

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
    setup(props: EditorialSectionProps, { slots }) {
      const hasSlot = (name: string) => !!slots[name];
      const htmlTag = props.as || (props.title ? `section` : `div`);
      const variantClasses = classNames(
        props.variants?.map(
          (variant: string) => `c-editorial-section--${variant}`
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

<style src="./EditorialSection.css"></style>
