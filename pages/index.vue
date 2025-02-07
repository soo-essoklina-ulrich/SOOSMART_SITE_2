<template>
  <main>
    <!-- Hero Section -->
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
            <BaseButton to="/contact" variant="white" size="lg">
              Contactez-nous
            </BaseButton>
            <BaseButton to="/services" variant="outline" size="lg" class="border-white text-white hover:bg-primary-600">
              Nos services
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

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
  </main>
</template>

<script setup>
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
</script>