<template>
  <div class="frame row justify-center items-center">
    <q-img v-if="icon !== undefined" :src="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    itemSelect?: string;
    actived: boolean;
  }>(),
  {
    itemSelect: undefined,
    actived: false
  }
);

const icon = computed(() => {
  if (props.itemSelect === 'x'.toUpperCase()) {
    return new URL(`../../assets/icon/icon-x-blue.svg`, import.meta.url).href;
  } else if (props.itemSelect === 'o'.toUpperCase()) {
    return new URL(`../../assets/icon/icon-o-yellow.svg`, import.meta.url).href;
  } else {
    return undefined;
  }
});
</script>

<style scoped lang="scss">
.frame {
  width: 140px;
  height: 140px;
  border-radius: 15px;
  background: $semi-dark-navy;
  box-shadow: 0px -8px 0px 0px #10212a inset;
}

.q-img {
  width: 64px;
  height: 64px;
}

.bg-select-o {
  background: 
}
.bg-select-x {
  background: 
}
</style>
