<script lang="ts" setup>
import classNames from "classnames";
import { computed, PropType } from "vue";
import type { VButtonProps } from "./VButton.types";

interface Props {
  as?: string,
  href?: string,
  variants?: VButtonProps["variants"],
  type?: string,
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button'
});

const htmlTag = computed(() => {
  if (props.as) {
    return props.as;
  }
  if (props.href) {
    return "a";
  }
  return "button";
});

const variantClasses = computed(() =>
  classNames(props.variants?.map((variant: string) => `c-button--${variant}`))
);
</script>

<template>
  <component
    :is="htmlTag"
    :type="!href && type ? type : undefined"
    :class="['c-button', variantClasses]"
    :href="href"
  >
    <span class="c-button__icon" v-if="$slots.icon">
      <slot name="icon" />
    </span>
    <span class="c-button__label" v-if="$slots.default">
      <slot name="default" />
    </span>
  </component>
</template>

<style src="./VButton.css"></style>
