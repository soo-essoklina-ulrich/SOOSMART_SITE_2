<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheHeader"
})
</script>

<template>

  <div class="mx-1.5 my-2.5 ">
    <Menubar>
      <template #start>
        <img alt="Vue logo" src="../public/favicon.ico" />
        <NuxtLink to="/" class="hover:text-emerald-700">
          <span class="ml-2 text-base">SOOSMART GROUP</span>
        </NuxtLink>
      </template>

      <template #end>
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="hover:text-emerald-700">Acceuil</NuxtLink>
          <NuxtLink to="/" class="hover:text-emerald-700">Acceuil</NuxtLink>
          <NuxtLink to="/" class="hover:text-emerald-700">Acceuil</NuxtLink>
          <NuxtLink to="/" class="hover:text-emerald-700">Acceuil</NuxtLink>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>

</style>
