<template>
  <div class="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
    <h1 class="text-2xl font-bold mb-6">Add New User</h1>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="block text-sm font-medium mb-1">Phone</label>
        <input
          v-model="form.phone"
          type="text"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <!-- Address -->
      <div>
        <label class="block text-sm font-medium mb-1">Address</label>
        <textarea
          v-model="form.address"
          class="w-full border rounded px-3 py-2"
          rows="3"
        ></textarea>
      </div>

      <!-- Actions -->
      <div class="flex gap-3">
        <button
          type="submit"
          class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Save User
        </button>

        <NuxtLink
          to="/users"
          class="px-5 py-2 border rounded hover:bg-gray-100"
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
import { useUsers } from '@/composables/useUsers'
import { validateUser } from '@/utils/validation'

const router = useRouter()
const { addUser } = useUsers()

const form = reactive({ name: '', email: '', phone: '', address: '' })
const errors = reactive({})

const submitForm = () => {
  Object.assign(errors, validateUser(form))
  if (Object.keys(errors).length > 0) return

  addUser({ ...form })
  alert(`User "${form.name}" created successfully!`)
  router.push('/users')
}
</script>

