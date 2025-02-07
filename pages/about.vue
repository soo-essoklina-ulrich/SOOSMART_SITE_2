<template>
  <main class="py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Histoire -->
      <section class="mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">À propos de SOOSMART Group</h1>
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">
            Depuis notre création, SOOSMART Group s'est imposé comme un leader dans le domaine de la cybersécurité et des réseaux, 
            accompagnant les entreprises dans leur transformation numérique sécurisée.
          </p>
          <p class="text-gray-600 mb-6">
            Notre expertise s'étend de l'audit de sécurité à la mise en place de solutions sur mesure, 
            en passant par la formation des équipes aux bonnes pratiques de sécurité informatique.
          </p>
        </div>
      </section>

      <!-- Section Valeurs -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Nos Valeurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-600 mb-4">Excellence</h3>
            <p class="text-gray-600">
              Nous nous engageons à fournir des services de la plus haute qualité, 
              en restant à la pointe des dernières technologies et menaces de sécurité.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-600 mb-4">Innovation</h3>
            <p class="text-gray-600">
              Notre équipe recherche constamment les solutions les plus innovantes 
              pour protéger nos clients contre les menaces émergentes.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-600 mb-4">Confiance</h3>
            <p class="text-gray-600">
              La confiance est au cœur de notre relation avec nos clients. 
              Nous garantissons confidentialité et professionnalisme dans tous nos services.
            </p>
          </div>
        </div>
      </section>

      <!-- Section Équipe -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Notre Équipe</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="bg-white p-6 rounded-lg shadow-md">
            <div class="aspect-w-1 aspect-h-1 mb-4">
              <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover rounded-lg">
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
            <p class="text-primary-600 mb-2">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const team = [
  {
    name: 'Thomas Martin',
    role: 'Directeur Général',
    description: 'Expert en cybersécurité avec plus de 15 ans d\'expérience dans le secteur.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  {
    name: 'Sophie Bernard',
    role: 'Responsable Technique',
    description: 'Spécialiste des infrastructures réseaux et de la sécurité des systèmes.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  {
    name: 'Marc Dubois',
    role: 'Responsable Formation',
    description: 'Expert en formation et sensibilisation à la sécurité informatique.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  }
]
</script>