<template>
  <Section
    title="A premium Kings of War tournament celebrating the best of the hobby."
    lead-section
    :variants="['padded-lg']"
  >
    <Button href="/" :variants="['lg', 'decorative', 'invert']">
      Book your place
    </Button>
  </Section>
</template>

<script lang="ts" setup>
  import Section from '~/components/Section';
  import Button from '~/components/Button';
</script>
