<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Hero"
})
</script>

<template>
  <section class="relative bg-primary-700 py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
          Sécurisez votre avenir numérique
        </h1>
        <p class="mt-6 text-xl text-primary-100 max-w-2xl mx-auto mb-12">
          Expert en cybersécurité et réseaux, SOOSMART Group vous accompagne dans la protection de vos systèmes d'information.
        </p>
        <div class="flex justify-center gap-4">
          <Button>
            Contactez-nous
          </Button>
          <Button to="/services" class="border-white text-white hover:bg-primary-600">
            Nos services
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
