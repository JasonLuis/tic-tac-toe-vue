<template>
  <div
    class="row justify-center items-center"
    :class="[bgSelect, isWin]"
    @click="selectActive"
  >
    <q-img v-if="icon !== undefined" :src="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['active']);

const active = ref<boolean>(false);

const props = withDefaults(
  defineProps<{
    itemSelect: string;
    selectOnePlayer: boolean;
    selectOnePlayerValue: string;
    win: boolean;
    refresh: boolean;
  }>(),
  {
    itemSelect: 'X',
    refresh: false,
    selectOnePlayer: false,
    win: false,
    selectOnePlayerValue: undefined
  }
);

watch(
  () => props.refresh,
  (newX: boolean) => {
    if (newX === true) {
      active.value = false;
    }
  }
);

const isRoundTwoPlayer = computed(() => {
  return (
    props.selectOnePlayer === true && props.selectOnePlayerValue !== undefined
  );
});

watch(isRoundTwoPlayer, newValue => {
  if (newValue) active.value = true;
});

const isWin = computed(() => {
  if (props.win && active.value) {
    if (props.itemSelect.toUpperCase() === 'X') {
      return 'frame-win-x';
    } else if (props.itemSelect.toUpperCase() === 'O') {
      return 'frame-win-o';
    }
  }

  return 'frame-normal';
});

const icon = computed(() => {
  if (props.win) {
    if (props.itemSelect.toUpperCase() === 'X') {
      return new URL(`../../assets/icon/icon-x-win.svg`, import.meta.url).href;
    } else if (props.itemSelect.toUpperCase() === 'O') {
      return new URL(`../../assets/icon/icon-o-win.svg`, import.meta.url).href;
    }
  }

  if (active.value) {
    if (props.itemSelect.toUpperCase() === 'X') {
      return new URL(`../../assets/icon/icon-x-blue.svg`, import.meta.url).href;
    } else if (props.itemSelect.toUpperCase() === 'O') {
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
  if (!active.value) {
    active.value = true;
    emit('active', { isActive: active.value, itemSelected: props.itemSelect });
  }
};
</script>

<style scoped lang="scss">
%box {
  width: 140px;
  height: 140px;
  border-radius: 15px;
}

.frame-normal {
  @extend %box;
  background: $semi-dark-navy;
  box-shadow: 0px -8px 0px 0px #10212a inset;
  cursor: url('../../assets/icon/pointer.svg'), default;
}

.frame-win-o {
  @extend %box;
  background: #f2b137;
}

.frame-win-x {
  @extend %box;
  background: #31c3bd;
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
