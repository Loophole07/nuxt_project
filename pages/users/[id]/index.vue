<template>
  <div v-if="user" class="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 mt-6">
    <!-- User Info -->
    <h1 class="text-2xl font-bold">{{ user.name }}</h1>

    <div class="mt-4 text-gray-600 space-y-2">
      <p><span class="font-medium">Email:</span> {{ user.email }}</p>
      <p><span class="font-medium">Phone:</span> {{ user.phone }}</p>
      <p><span class="font-medium">Address:</span> {{ user.address }}</p>
    </div>

    <!-- Action Buttons -->
    <div class="mt-6 flex flex-wrap gap-3">
      <button
        @click="editUser(user.id)"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Edit
      </button>

      <button
        @click="confirmDelete(user.id)"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>

    <!-- Back Link -->
    <NuxtLink
      to="/users"
      class="inline-block mt-6 text-blue-600 hover:underline"
    >
      ← Back to Users
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsers } from '@/composables/useUsers'

const route = useRoute()
const router = useRouter()
const { getUserById, deleteUser } = useUsers() // use deleteUser from composable


const user = computed(() => getUserById(route.params.id))


const editUser = (id) => {
  router.push(`/users/${id}/edit`)
}


const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    deleteUser(id)
    router.push('/users') 
    alert('User deleted successfully!')
  }
}
</script>
