<template>
  <div class="column items-center">
    <UiLogoGame />
    <UiCardSelect class="q-mt-lg" @item-select="playerSelect = $event" />
    <UiBaseButton class="q-mt-lg" />
    <UiBaseButton
      class="q-mt-md"
      label="new game (vs player)"
      background="#31C3BD"
      box-shadow="#118C87"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardSelect from '~~/src/core/components/CardSelect/CardSelect.vue';
import UiBaseButton from '~~/src/core/components/BaseButton/BaseButton.vue';

const playerSelect = ref<string>();
</script>
