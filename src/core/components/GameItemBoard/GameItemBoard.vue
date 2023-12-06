<template>
  <div
    class="frame row justify-center items-center"
    :class="bgSelect"
    @click="selectActive"
  >
    <q-img v-if="icon !== undefined" :src="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const emit = defineEmits(['active']);

const active = ref<boolean>(false);

const props = withDefaults(
  defineProps<{
    itemSelect: string;
  }>(),
  {
    itemSelect: 'X'
  }
);

const icon = computed(() => {
  if (active.value) {
    if (props.itemSelect.toUpperCase() === 'x'.toUpperCase()) {
      return new URL(`../../assets/icon/icon-x-blue.svg`, import.meta.url).href;
    } else if (props.itemSelect.toUpperCase() === 'o'.toUpperCase()) {
      return new URL(`../../assets/icon/icon-o-yellow.svg`, import.meta.url)
        .href;
    }
  }

  return undefined;
});

const bgSelect = computed(() => {
  if (!active.value) {
    if (props.itemSelect.toUpperCase() === 'x'.toUpperCase()) {
      return 'bg-select-x';
    } else if (props.itemSelect.toUpperCase() === 'o'.toUpperCase()) {
      return 'bg-select-o';
    }
  }

  return '';
});

const selectActive = () => {
  active.value = true;
  emit('active', active.value);
  return active.value;
};
</script>

<style scoped lang="scss">
.frame {
  width: 140px;
  height: 140px;
  border-radius: 15px;
  background: $semi-dark-navy;
  box-shadow: 0px -8px 0px 0px #10212a inset;
  cursor: url('../../assets/icon/pointer.svg'), default;
}

.q-img {
  width: 64px;
  height: 64px;
}
.bg-select-o {
  background: $semi-dark-navy;
}
.bg-select-x {
  background: $semi-dark-navy;
}

.bg-select-x:hover {
  background-image: url('../../assets/icon/icon-x-hover.svg');
}

.bg-select-o:hover {
  background-image: url('../../assets/icon/icon-o-hover.svg');
}
</style>
