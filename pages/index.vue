<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Admin Dashboard</h1>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Users Card -->
      <NuxtLink
        to="/users"
        class="bg-blue-600 text-white rounded-xl shadow p-6 hover:bg-blue-700 transition flex flex-col justify-between"
      >
        <div>
          <p class="text-2xl font-bold">{{ users.length }}</p>
          <p class="mt-2">Users</p>
        </div>
        <div class="mt-4 text-sm">View all users →</div>
      </NuxtLink>

      <!-- Products Card -->
      <NuxtLink
        to="/products"
        class="bg-green-600 text-white rounded-xl shadow p-6 hover:bg-green-700 transition flex flex-col justify-between"
      >
        <div>
          <p class="text-2xl font-bold">{{ products.length }}</p>
          <p class="mt-2">Products</p>
        </div>
        <div class="mt-4 text-sm">View all products →</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useUsers } from '@/composables/useUsers'
import { useProducts } from '@/composables/useProducts'

const { users } = useUsers()
const { products } = useProducts()
</script>
