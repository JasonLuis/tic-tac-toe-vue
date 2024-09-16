<template>
  <div class="column items-center">
    <UiLogoGame />
    <UiBaseButton
      class="q-mt-lg"
      label="Easy"
      background="#A2DFF7"
      box-shadow="#74B9F5"
      @click="startGame(LevelEnum.Easy)"
    />
    <UiBaseButton
      class="q-mt-lg"
      label="Medium"
      background="#F7C6C7"
      box-shadow="#F7B731"
      @click="startGame(LevelEnum.Medium)"
    />
    <UiBaseButton
      class="q-mt-md"
      label="Hard"
      background="#F76C6C"
      box-shadow="#C62828"
      @click="startGame(LevelEnum.Hard)"
    />
    <UiBaseButton
      class="q-mt-md"
      label="Very Hard"
      background="#8E2DE2"
      box-shadow="#5A1F77"
      @click="startGame(LevelEnum.VeryHard)"
    />
  </div>
</template>

<script setup lang="ts">
import { useplayerCurrent } from '~~/src/store/playerCurrent';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiBaseButton from '~~/src/core/components/BaseButton/BaseButton.vue';
import { LevelEnum } from '~/server/LevelEnum';

const { setLevel } = useplayerCurrent();

const startGame = (level: LevelEnum) => {
  setLevel(level);

  const router = useRouter();
  router.push({
    name: 'singlePlayer'
  });
};
</script>
