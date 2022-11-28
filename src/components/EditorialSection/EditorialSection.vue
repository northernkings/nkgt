<script lang="ts" setup>
import classNames from "classnames";
import { PropType } from "vue";

export interface Props {
  title?: string;
  variants?: Array<string>;
  as?: string;
  titleAs?: string;
}

const props = withDefaults(defineProps<Props>(), {
  titleAs: "h2",
});

const htmlTag = props.as || (props.title ? `section` : `div`);
const variantClasses = classNames(
  props.variants?.map((variant: string) => `c-editorial-section--${variant}`)
);
</script>

<template>
  <component :is="htmlTag" :class="['c-editorial-section', variantClasses]">
    <div class="c-editorial-section__inner l-container">
      <div class="c-editorial-section__content">
        <header v-if="title" class="c-editorial-section__header o-container">
          <component :is="titleAs" class="c-editorial-section__title u-text-uppercase">
            {{ title }}
          </component>
        </header>
        <div class="c-editorial-section__body l-flow">
          <slot />
        </div>
      </div>
      <div v-if="$slots.media" class="c-editorial-section__media">
        <slot name="media" />
      </div>
    </div>
  </component>
</template>

<style src="./EditorialSection.css"></style>
