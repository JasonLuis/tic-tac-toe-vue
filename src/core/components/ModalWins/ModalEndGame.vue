<template>
  <q-dialog v-model="openModal" full-width maximized>
    <q-card>
      <q-card-section class="row justify-center q-pa-none">
        <span class="text-win">player 1 wins!</span>
      </q-card-section>

      <q-card-section class="row justify-center items-center q-pa-none q-mt-md">
        <q-img :src="img" />
        <span class="next-round">takes the round</span>
      </q-card-section>

      <q-card-section class="row justify-center q-pa-none q-mt-lg">
        <q-btn class="btn-quit">Quit</q-btn>
        <q-btn class="btn-next q-ml-md">Next Round</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(
  defineProps<{
    modal: boolean;
  }>(),
  {
    modal: true
  }
);

const openModal = computed(() => {
  return props.modal;
});

const img = new URL(`../../assets/icon/icon-o-yellow.svg`, import.meta.url)
  .href;
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
