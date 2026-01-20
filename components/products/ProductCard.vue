<template>
  <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
    <!-- Product Info -->
    <div class="p-5 flex flex-col">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">Model: {{ product.model }}</p>
      <p class="mt-2 text-sm text-gray-600">Rs. {{ product.price }}</p>

      <!-- Action Buttons -->
      <div class="mt-4 flex space-x-2 items-center">
      <NuxtLink
          :to="`/products/${product.id}/edit`"
          class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
        >
          Edit
        </NuxtLink>

        <button
          @click="confirmDelete(product.id)"
          class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
        >
          Delete
        </button>
      </div>

      <!-- View Details -->
      <NuxtLink
        :to="`/products/${product.id}`"
        class="mt-2 text-blue-600 hover:underline text-sm"
      >
        View Details →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from '@/composables/useProducts' 

defineProps({
  product: Object
})

const { deleteProduct } = useProducts() 

const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    deleteProduct(id) 
    alert('Product deleted successfully!')
  }
}
</script>
