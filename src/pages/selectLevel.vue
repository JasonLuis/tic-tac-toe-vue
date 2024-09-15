<template>
  <div class="column items-center">
    <UiLogoGame />
    <UiBaseButton
      class="q-mt-lg"
      label="Easy"
      background="#A2DFF7"
      box-shadow="#74B9F5"
      @click="startGame(NivelEnum.Facil)"
    />
    <UiBaseButton
      class="q-mt-lg"
      label="Medium"
      background="#F7C6C7"
      box-shadow="#F7B731"
      @click="startGame(NivelEnum.Medio)"
    />
    <UiBaseButton
      class="q-mt-md"
      label="Hard"
      background="#F76C6C"
      box-shadow="#C62828"
      @click="startGame(NivelEnum.Dificil)"
    />
    <UiBaseButton
      class="q-mt-md"
      label="Hard"
      background="#8E2DE2"
      box-shadow="#5A1F77"
      @click="startGame(NivelEnum.MuitoDificil)"
    />
  </div>
</template>

<script setup lang="ts">
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiBaseButton from '~~/src/core/components/BaseButton/BaseButton.vue';
import { NivelEnum } from '~/server/NivelEnum';

const startGame = (level: NivelEnum) => {
  const router = useRouter();
  router.push({
    name: 'singlePlayer',
    query: {
      level
    }
  });
};
</script>
