<template>
  <q-layout view="hHh lpR fFf" class="bg-dark-bavy">
    <q-page-container class="window-height row justify-center items-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.bg-dark-bavy {
  background-color: $dark-navy;
}
</style>
