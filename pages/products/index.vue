<template>
  <div>
    
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Vehicles</h1>

      <NuxtLink
        to="/products/create"
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        + Add Vehicle
      </NuxtLink>
    </div>

    
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/products/ProductCard.vue'
import { useProducts } from '@/composables/useProducts'

const { products } = useProducts()
</script>
