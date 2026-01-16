<template>
  <div v-if="product" class="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
    <!-- Product Info -->
    <div class="mt-6 flex flex-col gap-4">
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <p class="text-gray-500">Model: {{ product.model }}</p>
      <p class="text-lg font-semibold">Price: Rs. {{ product.price }}</p>
      <p class="text-gray-600">{{ product.details }}</p>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 mt-4">
        
        <!-- Edit Button -->
        <button
          @click="editProduct(product.id)"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Edit
        </button>

        <!-- Delete Button -->
        <button
          @click="deleteProduct(product.id)"
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Delete
        </button>

        <!-- Back Link -->
        <NuxtLink
          to="/products"
          class="ml-auto text-blue-600 hover:underline text-sm"
        >
          ← Back to Vehicles
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from '@/composables/useProducts'

const route = useRoute()
const router = useRouter()
const { getProductById, removeProduct } = useProducts()

const product = computed(() => getProductById(route.params.id))

// Edit handler
const editProduct = (id) => {
  router.push(`/products/edit/${id}`)
}

// Delete handler
const deleteProduct = (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    removeProduct(id)
    router.push('/products') 
  }
}
</script>
