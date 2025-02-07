<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :class="[
      'inline-flex items-center justify-center rounded-md transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
      variants[variant],
      sizes[size],
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from '#components'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: ''
  }
})

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-custom hover:shadow-custom-hover',
  secondary: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-500',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  white: 'bg-white text-primary-600 hover:bg-gray-50 focus:ring-primary-500 shadow-custom hover:shadow-custom-hover'
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}
</script>