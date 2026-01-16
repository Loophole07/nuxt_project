<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Users</h1>

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
