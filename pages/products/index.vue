<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Vehicles</h1>

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
