<template>
  <div class="max-w-xl mx-auto bg-white p-6 rounded-xl shadow mt-6">
    <h1 class="text-2xl font-bold mb-6">Add New Product</h1>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="Product Name"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Model -->
      <div>
        <label class="block mb-1 font-medium">Model</label>
        <input
          v-model="form.model"
          type="text"
          placeholder="Model"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Price -->
      <div>
        <label class="block mb-1 font-medium">Price</label>
        <input
          v-model="form.price"
          type="text"
          placeholder="Price"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Details -->
      <div>
        <label class="block mb-1 font-medium">Details</label>
        <textarea
          v-model="form.details"
          rows="4"
          placeholder="Product details"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Image -->
      <div>
        <label class="block mb-1 font-medium">Image URL</label>
        <input
          v-model="form.image"
          type="text"
          placeholder="Image path or URL"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-4">
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save Product
        </button>

        <NuxtLink
          to="/products"
          class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProducts } from '@/composables/useProducts'
import { validateProduct } from '@/utils/validation'

const router = useRouter()
const { addProduct } = useProducts()

const form = reactive({ name: '', model: '', price: '', details: '', image: '' })
const errors = reactive({})

const submitForm = () => {
  Object.assign(errors, validateProduct(form))
  if (Object.keys(errors).length > 0) return

  addProduct({ ...form })
  alert(`Product "${form.name}" created successfully!`)
  router.push('/products')
}
</script>