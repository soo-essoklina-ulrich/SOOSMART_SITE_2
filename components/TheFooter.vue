<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">SOOSMART Group</h3>
          <p class="text-gray-400">Expert en cybersécurité et réseaux</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="text-gray-400">
            <li>Email: contact@soosmart.group</li>
            <li>Tél: +228 xx xx xx xx</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul class="text-gray-400 space-y-2">
            <li><NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-white">À propos</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white">Services</NuxtLink></li>
            <li><NuxtLink to="/formations" class="hover:text-white">Formations</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} SOOSMART Group. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>