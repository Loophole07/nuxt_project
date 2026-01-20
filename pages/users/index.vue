<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Users</h1>
     
      <NuxtLink
        to="/users/create"
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        + Create User
      </NuxtLink>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script setup>
import UserCard from '@/components/users/UserCard.vue'
import { useUsers } from '@/composables/useUsers'

const { users } = useUsers()
</script>
