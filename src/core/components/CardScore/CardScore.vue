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
  player1 = 'player1',
  player2 = 'player2',
  ties = 'ties'
}
const props = defineProps<{
  text: string;
  score: number;
  player: Select;
}>();

const bgCard = computed(() => {
  if (props.player === Select.player1) {
    return 'bg-p1';
  } else if (props.player === Select.player2) {
    return 'bg-p2';
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
.bg-p1 {
  background: $light-blue;
}

.bg-ties {
  background: $silver;
}

.bg-p2 {
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
