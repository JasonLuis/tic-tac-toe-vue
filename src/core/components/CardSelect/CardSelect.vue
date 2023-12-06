<template>
  <q-card class="row items-center justify-center">
    <q-card-section class="row justify-center">
      <span class="header">PICK PLAYER 1’S MARK</span>
    </q-card-section>
    <q-card-section class="row justify-center q-pa-none">
      <q-btn-toggle
        v-model="model"
        toggle-color="primary"
        :options="[
          { value: 'X', slot: 'two' },
          { value: 'O', slot: 'three' }
        ]"
        @update:model-value="onModelUpdate"
      >
        <template #two>
          <div class="select-icon row items-center justify-center">
            <q-icon color="primary" :name="`img:${getIconX}`" />
          </div>
        </template>

        <template #three>
          <div class="select-icon">
            <q-icon color="primary" :name="`img:${getIconO}`" />
          </div>
        </template>
      </q-btn-toggle>
    </q-card-section>
    <q-card-section class="row justify-center">
      <span class="footer">PICK PLAYER 1’S MARK</span>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const emit = defineEmits(['itemSelect']);

const model = ref<string>('X');
const getIconX = computed(() => {
  return model.value === 'X'
    ? new URL(`../../assets/icon/icon-x-selected.svg`, import.meta.url).href
    : new URL(`../../assets/icon/icon-x.svg`, import.meta.url).href;
});

const getIconO = computed(() => {
  return model.value === 'O'
    ? new URL(`../../assets/icon/icon-o-selected.svg`, import.meta.url).href
    : new URL(`../../assets/icon/icon-o.svg`, import.meta.url).href;
});

const onModelUpdate = (newValue: string) => {
  emit('itemSelect', newValue);
};

onMounted(() => {
  emit('itemSelect', model.value);
});
</script>

<style scoped lang="scss">
%text {
  font-family: Outfit, 'sans-serif';
}

.header {
  @extend %text;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  color: $silver;
}

.footer {
  @extend %text;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.875px;
  opacity: 0.5;
  color: $silver;
}

.q-card-section {
  height: auto;
}
.q-card {
  width: 460px;
  height: 205px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--Semi-Dark-Navy, #1f3641);
  box-shadow: 0px -8px 0px 0px #10212a inset;
}

.q-btn-toggle {
  width: 412px;
  height: 72px;
  border-radius: 10px;
  background: var(--Dark-Navy, #1a2a33);
}

.q-btn-group {
  width: 412px;
  height: 72px;
  padding: 9px;
  display: flex;
  justify-content: center;
  :deep(.q-btn) {
    border-radius: 10px;
  }
}

.q-btn {
  border-radius: 10px !important;
  margin-left: 10px;
}

.select-icon {
  width: 170px;
}
</style>
