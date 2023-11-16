<template>
  <q-btn
    :label="props.label"
    :style="`color: ${props.color}; background-color: ${props.background}; box-shadow: 0px -8px 0px 0px ${props.boxShadow} inset;`"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    background: string;
    color: string;
    boxShadow: string;
  }>(),
  {
    label: 'New game (vs cpu)',
    background: '#F2B137',
    color: '#1f3641',
    boxShadow: '#CC8B13'
  }
);
</script>

<style scoped lang="scss">
%font-style {
  font-family: Outfit;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}

.q-btn {
  width: 460px;
  height: 67px;
  flex-shrink: 0;
  border-radius: 15px;
  @extend %font-style;
}
</style>
