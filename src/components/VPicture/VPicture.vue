<template>
  <component :is="caption ? 'figure' : 'div'" :class="classes">
    <picture
      :style="{
        'background-image': lqip && `url(${lqip})`,
        'background-color': backgroundColor,
        'padding-top': aspectRatio,
      }"
      class="c-picture__picture"
    >
      <template v-if="sources">
        <source
          v-for="(source, index) in sources"
          :key="index"
          :srcset="source.srcset.join(',')"
          :type="source.type"
          :media="source.media"
        />
      </template>
      <img
        :src="src"
        :alt="alt"
        :width="size?.width"
        :height="size?.height"
        class="c-picture__image"
        :loading="loading"
      />
    </picture>
    <figcaption v-if="caption" class="c-picture__caption">
      {{ caption }}
    </figcaption>
  </component>
</template>

<script lang="ts">
  import classNames from 'classnames';
  import { defineComponent, PropType } from 'vue';
  import type { PictureSize, VPictureProps, PictureSource } from './VPicture.types';

  export default defineComponent({
    props: {
      alt: {
        type: String,
        required: true,
      },
      backgroundColor: {
        type: String,
      },
      caption: {
        type: String,
      },
      lqip: {
        type: String,
      },
      loading: {
        type: String,
        validator: (value: string): boolean => {
          return (value && ['lazy', 'eager'].includes(value)) || value === null;
        },
      },
      maintainAspectRatio: {
        type: Boolean,
        default: false,
      },
      modifiers: {
        type: Array as PropType<Array<string>>,
      },
      sources: {
        type: Array as PropType<Array<PictureSource>>,
      },
      size: {
        type: Object as PropType<PictureSize>,
      },
      src: {
        type: String,
        required: true,
      },
    },
    computed: {
      classes: ({
        modifiers,
        size,
        maintainAspectRatio,
      }: VPictureProps): string => {
        return classNames(
          'c-picture',
          modifiers &&
            modifiers.map((modifier: string) => `c-picture--${modifier}`),
          size?.width &&
            size?.height &&
            maintainAspectRatio &&
            `c-picture--maintain-ratio`
        );
      },
      aspectRatio: ({
        size,
        maintainAspectRatio,
      }: VPictureProps): string | undefined => {
        return maintainAspectRatio && size?.width && size?.height
          ? `${(size.height / size.width) * 100}%`
          : undefined;
      },
    },
  });
</script>

<style src="./VPicture.css"></style>
