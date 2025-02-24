<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OverViews",
})
onMounted(async () => {
  const services = [
    {
      title: 'Audit de Sécurité',
      description: 'Évaluation complète de votre infrastructure IT et identification des vulnérabilités.'
    },
    {
      title: 'Solutions Réseaux',
      description: 'Conception et implémentation de réseaux sécurisés pour votre entreprise.'
    },
    {
      title: 'Formations',
      description: 'Programmes de formation adaptés pour renforcer les compétences de vos équipes.'
    }
  ]
})
</script>

<template>
  <!-- Services Preview -->
  <section class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="service in services"
            :key="service.title"
            class="p-8 border rounded-xl hover:shadow-custom-hover transition-shadow duration-300 bg-white"
        >
          <h3 class="text-xl font-semibold mb-4 text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <BaseButton
              :to="'/services'"
              variant="secondary"
              size="sm"
              class="w-full"
          >
            En savoir plus
          </BaseButton>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="bg-primary-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Prêt à sécuriser votre entreprise ?</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Découvrez nos formations en cybersécurité et renforcez les compétences de vos équipes.
        </p>
        <BaseButton to="/formations" variant="primary" size="lg">
          Voir nos formations
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
