<template>
  <q-dialog v-model="openModal" full-width maximized>
    <q-card>
      <q-card-section class="row justify-center q-pa-none">
        <span class="text-win">{{ props.textWin }}</span>
      </q-card-section>

      <q-card-section class="row justify-center items-center q-pa-none q-mt-md">
        <q-img
          v-if="props.winner === Winner.o || props.winner === Winner.x"
          :src="getIcon"
        />
        <span class="next-round" :style="`color: ${getStyle}`">
          takes the round
        </span>
      </q-card-section>

      <q-card-section class="row justify-center q-pa-none q-mt-lg">
        <q-btn class="btn-quit" @click="closeModal()">Quit</q-btn>
        <q-btn class="btn-next q-ml-md" @click="refreshGame()"
          >Next Round</q-btn
        >
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
enum Winner {
  x = 'X',
  o = 'O'
}

const emit = defineEmits(['close', 'refresh']);

const props = withDefaults(
  defineProps<{
    modal: boolean;
    textWin?: string;
    winner?: Winner;
  }>(),
  {
    modal: false,
    winner: undefined
  }
);

const openModal = computed(() => {
  return props.modal;
});

const getIcon = computed(() => {
  return props.winner === Winner.o
    ? new URL(`../../assets/icon/icon-o-yellow.svg`, import.meta.url).href
    : new URL(`../../assets/icon/icon-x-blue.svg`, import.meta.url).href;
});

const getStyle = computed(() => {
  if (props.winner === Winner.o) {
    return '#F2B137';
  } else if (props.winner === Winner.x) {
    return '#31C3BD';
  } else {
    return '#A8BFC9';
  }
});

const closeModal = () => {
  const router = useRouter();
  router.back();
  emit('close', false);
};

const refreshGame = () => {
  emit('refresh');
};
</script>

<style scoped lang="scss">
%text-style {
  font-family: Outfit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.q-dialog {
  &:deep(.q-dialog__inner--minimized) {
    padding: 0px;
  }
}
.q-card {
  width: 100wh;
  height: 266px;
  background: $semi-dark-navy;
}

.text-win {
  color: $silver;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 45px;
  @extend %text-style;
}

.q-img {
  width: 64px;
  height: 64px;
}

.next-round {
  color: $light-yellow;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 40px;
  letter-spacing: 2.5px;
  margin-left: 24px;
  @extend %text-style;
}

.q-btn {
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 1px;
  color: $dark-navy;
  @extend %text-style;
}

.btn-quit {
  width: 76px;
  background: $silver;
  box-shadow: 0px -4px 0px 0px #6b8997 inset;
}

.btn-next {
  width: 146px;
  background: $light-yellow;
  box-shadow: 0px -4px 0px 0px #cc8b13 inset;
}
</style>
