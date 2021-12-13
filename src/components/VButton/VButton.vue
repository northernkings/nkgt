<template>
  <component
    :is="htmlTag"
    :type="!href && type ? type : undefined"
    :class="['c-button', variantClasses]"
    :href="href"
  >
    <span class="c-button__icon" v-if="hasSlot('icon')">
      <slot name="icon" />
    </span>
    <span class="c-button__label" v-if="hasSlot('default')">
      <slot name="default" />
    </span>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import type { VButtonProps } from './VButton.types';

  export default defineComponent({
    name: 'Button',
    props: {
      as: {
        type: String,
      },
      href: {
        type: String,
      },
      variants: {
        type: Array as PropType<VButtonProps['variants']>,
      },
      type: {
        type: String,
        default: 'button'
      },
    },
    setup(props: VButtonProps, { slots }) {
      const hasSlot = (name: string) => !!slots[name];
      const htmlTag = (): string => {
        if (props.as) {
          return props.as;
        }
        if (props.href) {
          return 'a';
        }
        return 'button';
      };
      const variantClasses = classNames(
        props.variants?.map((variant: string) => `c-button--${variant}`)
      );
      return {
        ...props,
        hasSlot,
        htmlTag: htmlTag(),
        variantClasses,
      };
    },
  });
</script>

<style src="./VButton.css"></style>
