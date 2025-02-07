<template>
  <header class="bg-white shadow-sm">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-primary-600">
            SOOSMART Group
          </NuxtLink>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-600">Accueil</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-600">À propos</NuxtLink>
          <NuxtLink to="/services" class="text-gray-700 hover:text-primary-600">Services</NuxtLink>
          <NuxtLink to="/formations" class="text-gray-700 hover:text-primary-600">Formations</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-primary-600">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>