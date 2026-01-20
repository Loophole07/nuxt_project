<template>
  <div class="max-w-xl mx-auto bg-white p-6 rounded-xl shadow mt-6">
    <h1 class="text-2xl font-bold mb-6">Edit Product</h1>

    <form v-if="form" @submit.prevent="saveProduct" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Model -->
      <div>
        <label class="block mb-1 font-medium">Model</label>
        <input
          v-model="form.model"
          type="text"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Price -->
      <div>
        <label class="block mb-1 font-medium">Price</label>
        <input
          v-model="form.price"
          type="text"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Details -->
      <div>
        <label class="block mb-1 font-medium">Details</label>
        <textarea
          v-model="form.details"
          rows="4"
          class="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Buttons -->
      <div class="flex gap-3">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>

        <NuxtLink
          :to="`/products/${route.params.id}`"
          class="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </NuxtLink>
      </div>
    </form>

    <p v-else class="text-red-500">Product not found.</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from '@/composables/useProducts'
import { validateProduct } from '@/utils/validation'

const route = useRoute()
const router = useRouter()
const { getProductById, updateProduct } = useProducts()

const product = getProductById(route.params.id)
const form = product ? reactive({ ...product }) : null
const errors = reactive({})

const saveProduct = () => {
  Object.assign(errors, validateProduct(form))
  if (Object.keys(errors).length > 0) return

  if (!confirm(`Are you sure you want to save changes to "${form.name}"?`)) return

  updateProduct(form)
  alert(`Product "${form.name}" updated successfully!`)
  router.push(`/products/${route.params.id}`)
}
</script>