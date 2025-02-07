<template>
  <main class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Formations</h1>

      <!-- Filtres -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-4">
          <BaseButton 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :variant="selectedCategory === category ? 'primary' : 'outline'"
            size="sm"
          >
            {{ category }}
          </BaseButton>
        </div>
      </div>

      <!-- Liste des formations -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="formation in filteredFormations" 
          :key="formation.id"
          class="bg-white rounded-xl shadow-custom hover:shadow-custom-hover transition-shadow duration-300 overflow-hidden"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full">
                {{ formation.category }}
              </span>
              <span class="text-gray-600">{{ formation.duration }}</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ formation.title }}</h2>
            <p class="text-gray-600 mb-4">{{ formation.description }}</p>
            <div class="mb-4">
              <h3 class="font-medium text-gray-900 mb-2">Points clés :</h3>
              <ul class="list-disc pl-5 space-y-1 text-gray-600">
                <li v-for="point in formation.keyPoints" :key="point">{{ point }}</li>
              </ul>
            </div>
            <div class="flex items-center justify-between mt-6 pt-6 border-t">
              <span class="text-2xl font-bold text-gray-900">{{ formation.price }}€</span>
              <BaseButton 
                to="/contact" 
                variant="primary"
                size="md"
              >
                S'inscrire
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const categories = ['Toutes', 'Cybersécurité', 'Réseaux', 'Conformité']
const selectedCategory = ref('Toutes')

const formations = [
  {
    id: 1,
    category: 'Cybersécurité',
    title: 'Sécurité Web Avancée',
    description: 'Formation approfondie sur la sécurisation des applications web modernes.',
    duration: '3 jours',
    price: 1500,
    keyPoints: [
      'Vulnérabilités OWASP Top 10',
      'Sécurisation des API',
      'Tests de pénétration'
    ]
  },
  {
    id: 2,
    category: 'Réseaux',
    title: 'Architecture Réseau Sécurisée',
    description: 'Conception et implémentation d\'architectures réseau sécurisées.',
    duration: '4 jours',
    price: 2000,
    keyPoints: [
      'Segmentation réseau',
      'Pare-feu nouvelle génération',
      'VPN et tunneling'
    ]
  },
  {
    id: 3,
    category: 'Conformité',
    title: 'RGPD en pratique',
    description: 'Mise en conformité RGPD pour les entreprises.',
    duration: '2 jours',
    price: 1200,
    keyPoints: [
      'Cadre légal',
      'Mesures techniques',
      'Documentation obligatoire'
    ]
  },
  {
    id: 4,
    category: 'Cybersécurité',
    title: 'Réponse aux Incidents',
    description: 'Gestion et réponse aux incidents de sécurité.',
    duration: '3 jours',
    price: 1800,
    keyPoints: [
      'Détection des incidents',
      'Analyse forensique',
      'Plan de réponse'
    ]
  }
]

const filteredFormations = computed(() => {
  if (selectedCategory.value === 'Toutes') {
    return formations
  }
  return formations.filter(f => f.category === selectedCategory.value)
})
</script>