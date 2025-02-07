<template>
  <main class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">Nos Services</h1>
      <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Des solutions sur mesure pour protéger votre entreprise contre les menaces numériques
      </p>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 gap-12">
        <div 
          v-for="service in services" 
          :key="service.title" 
          class="bg-white rounded-xl shadow-custom hover:shadow-custom-hover transition-all duration-300 overflow-hidden group"
        >
          <div class="md:flex">
            <div class="md:flex-shrink-0 relative overflow-hidden">
              <img 
                class="h-64 w-full object-cover md:h-full md:w-80 transition-transform duration-300 group-hover:scale-105" 
                :src="service.image" 
                :alt="service.title"
              >
            </div>
            <div class="p-8 md:p-10 flex flex-col flex-grow">
              <div class="uppercase tracking-wide text-sm text-primary-600 font-semibold mb-2">
                {{ service.category }}
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h2>
              <p class="text-gray-600 mb-6 flex-grow">{{ service.description }}</p>
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">Ce service inclut :</h3>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li 
                      v-for="feature in service.features" 
                      :key="feature"
                      class="flex items-center text-gray-600"
                    >
                      <svg class="h-5 w-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
                <BaseButton 
                  to="/contact" 
                  variant="primary"
                  size="lg"
                  class="w-full md:w-auto"
                >
                  Demander un devis
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const services = [
  {
    category: 'Audit & Conseil',
    title: 'Audit de Sécurité Complet',
    description: 'Une analyse approfondie de votre infrastructure informatique pour identifier les vulnérabilités et proposer des solutions adaptées.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Analyse des vulnérabilités',
      'Tests de pénétration',
      'Audit de configuration',
      'Rapport détaillé',
      'Recommandations personnalisées'
    ]
  },
  {
    category: 'Infrastructure',
    title: 'Solutions Réseaux Sécurisées',
    description: 'Conception et implémentation de réseaux d\'entreprise sécurisés et performants.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Architecture réseau',
      'Mise en place de pare-feu',
      'Segmentation réseau',
      'VPN sécurisé',
      'Monitoring 24/7'
    ]
  },
  {
    category: 'Protection',
    title: 'Sécurité des Données',
    description: 'Protection complète de vos données sensibles contre les menaces internes et externes.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Chiffrement des données',
      'Gestion des accès',
      'Sauvegarde sécurisée',
      'Plan de reprise d\'activité',
      'Conformité RGPD'
    ]
  }
]
</script>