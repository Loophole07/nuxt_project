<template>
  <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col justify-between">
    <!-- User Info -->
    <div>
      <h3 class="text-lg font-semibold text-gray-800">{{ user.name }}</h3>

      <div class="mt-2 text-sm text-gray-600 space-y-1">
        <p><span class="font-medium">Email:</span> {{ user.email }}</p>
        <p><span class="font-medium">Phone:</span> {{ user.phone }}</p>
        <p><span class="font-medium">Address:</span> {{ user.address }}</p>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="mt-4 flex space-x-2">
      <NuxtLink
        :to="`/users/${user.id}/edit`"
        class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
      >
        Edit
      </NuxtLink>

      <button
        @click="confirmDelete(user.id)"
        class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
      >
        Delete
      </button>
    </div>

    <!-- View Details -->
    <NuxtLink
      :to="`/users/${user.id}`"
      class="mt-2 text-blue-600 hover:underline text-sm"
    >
      View Details →
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUsers } from '@/composables/useUsers' 

defineProps({
  user: Object
})

const { deleteUser } = useUsers() 

const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    deleteUser(id) 
    alert('User deleted successfully!')
  }
}
</script>
