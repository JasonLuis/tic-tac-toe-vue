<template>
  <div class="logo row justify-between">
    <q-icon :name="`img: ${getIconX()}`" />
    <q-icon :name="`img: ${getIconO()}`" />
  </div>
</template>

<script setup lang="ts">
const getIconX = () =>
  new URL(`../../assets/icon/icon-x-blue.svg`, import.meta.url).href;

const getIconO = () =>
  new URL(`../../assets/icon/icon-o-yellow.svg`, import.meta.url).href;
</script>

<style scoped lang="scss">
.logo {
  width: 72px;
  height: 32px;
}

.q-icon {
  width: 36px;
  height: 32px;
}
</style>
