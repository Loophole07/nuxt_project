<template>
  <div v-if="form" class="max-w-xl mx-auto bg-white p-6 rounded-xl shadow mt-6">
    <h1 class="text-2xl font-bold mb-6">Edit User</h1>

    <form @submit.prevent="saveUser" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="User Name"
          class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="block mb-1 font-medium">Phone</label>
        <input
          v-model="form.phone"
          type="text"
          placeholder="Phone"
          class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Address -->
      <div>
        <label class="block mb-1 font-medium">Address</label>
        <input
          v-model="form.address"
          type="text"
          placeholder="Address"
          class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-4">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>

        <NuxtLink
          to="/users"
          class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </NuxtLink>
      </div>
    </form>
  </div>

  <p v-else class="text-red-500">User not found.</p>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsers } from '@/composables/useUsers'
import { validateUser } from '@/utils/validation'

const route = useRoute()
const router = useRouter()
const { getUserById, updateUser } = useUsers()

const user = getUserById(route.params.id)
const form = user ? reactive({ ...user }) : null
const errors = reactive({})

const saveUser = () => {
  Object.assign(errors, validateUser(form))
  if (Object.keys(errors).length > 0) return

  if (!confirm(`Are you sure you want to save changes to "${form.name}"?`)) return

  updateUser(form)
  alert(`User "${form.name}" updated successfully!`)
  router.push('/users')
}
</script>