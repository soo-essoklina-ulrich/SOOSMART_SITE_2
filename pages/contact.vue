<template>
  <main class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
          <div class="prose prose-lg">
            <p class="text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              concernant nos services de cybersécurité et nos formations.
            </p>
          </div>

          <div class="space-y-8">
            <div class="bg-white p-6 rounded-xl shadow-custom">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Nos Coordonnées</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Adresse</h3>
                    <p class="mt-1 text-sm text-gray-600">
                     Legassito<br>
                     Lome - Togo
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Email</h3>
                    <p class="mt-1 text-sm text-gray-600">contact@soosmart.group</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Téléphone</h3>
                    <p class="mt-1 text-sm text-gray-600">+228 xx xx xx xx</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Horaires</h3>
                    <p class="mt-1 text-sm text-gray-600">
                      Lundi - Vendredi : 9h00 - 18h00<br>
                      Fermé les weekends et jours fériés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <div class="bg-white p-8 rounded-xl shadow-custom">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Sujet</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="devis">Demande de devis</option>
                <option value="formation">Information sur les formations</option>
                <option value="service">Renseignement sur nos services</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>

            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              class="w-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </BaseButton>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi (à remplacer par l'appel API réel)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Réinitialisation du formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    alert('Message envoyé avec succès!')
  } catch (error) {
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}
</script>