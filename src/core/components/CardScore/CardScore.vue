<template>
  <q-card :class="bgCard">
    <q-card-section class="q-pa-none full-width">
      <p class="text-header q-pa-none">{{ props.text }}</p>
      <p class="score">{{ props.score }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
enum Select {
  playerX = 'X',
  playerO = 'O',
  ties = 'ties'
}
const props = defineProps<{
  text: string;
  score: number;
  player: Select;
}>();

const bgCard = computed(() => {
  if (props.player === Select.playerX) {
    return 'bg-x';
  } else if (props.player === Select.playerO) {
    return 'bg-o';
  } else {
    return 'bg-ties';
  }
});
</script>

<style scoped lang="scss">
.q-card {
  width: 140px;
  height: 72px;
  border-radius: 15px;
  padding-top: 13px;
  flex-shrink: 0;
  color: var(--Dark-Navy, #1a2a33);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Outfit;
  font-style: normal;
  line-height: normal;
}
.bg-x {
  background: $light-blue;
}

.bg-ties {
  background: $silver;
}

.bg-o {
  background: $light-yellow;
}

p {
  margin: 0px;
}

.text-header {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.875px;
  text-transform: uppercase;
}

.score {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.5px;
}
</style>
