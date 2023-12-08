<template>
  <q-card>
    <q-card-section
      class="row justify-center items-center full-height full-width q-pa-none"
    >
      <q-icon :name="`img: ${getIcon()}`" />
      <span class="text-style">TURN</span>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
enum Turn {
  x = 'X',
  o = 'O'
}

const props = defineProps<{
  turn: string;
}>();

const getIcon = computed(() => {
  return props.turn === Turn.x
    ? () => new URL(`../../assets/icon/icon-x.svg`, import.meta.url).href
    : () => new URL(`../../assets/icon/icon-o.svg`, import.meta.url).href;
});

onMounted(() => {
  console.log('turn', props.turn);
});
</script>

<style scoped lang="scss">
.q-card {
  width: 140px;
  height: 52px;
  border-radius: 10px;
  background: $semi-dark-navy;
  box-shadow: 0px -4px 0px 0px #10212a inset;
}

.q-icon {
  width: 20px;
  height: 20px;
}

.text-style {
  color: $silver;
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  margin-left: 13px;
}
</style>
