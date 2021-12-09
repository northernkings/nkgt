<template>
  <component
    :is="htmlTag"
    :type="!href && type ? type : undefined"
    :class="['c-button', variantClasses]"
    :href="href"
  >
    <span class="c-button__label" v-if="hasSlot('default')">
      <slot name="default" />
    </span>
    <span class="c-button__icon" v-if="hasSlot('icon')">
      <slot name="icon" />
    </span>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import { ButtonProps } from './Button.types';

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
        type: Array as PropType<ButtonProps['variants']>,
      },
      type: {
        type: String,
      },
    },
    setup(props: ButtonProps, { slots }) {
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

<style src="./Button.css"></style>
