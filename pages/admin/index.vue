<template>
  <div class="p-6">

    <!-- Users Table -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold">Users</h2>
        <NuxtLink to="/users" class="text-blue-600 hover:underline text-sm">
          View all users →
        </NuxtLink>
      </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Id</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Number</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Address</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(user, index) in users.slice(0,5)" :key="user.id">
              <td class="px-4 py-2 text-sm text-gray-700">{{ index + 1 }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ user.name }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ user.email }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ user.phone }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ user.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Products Table -->
    <section>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold">Products</h2>
        <NuxtLink to="/products" class="text-blue-600 hover:underline text-sm">
          View all products →
        </NuxtLink>
      </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Id</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Model</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(product, index) in products.slice(0,5)" :key="product.id">
              <td class="px-4 py-2 text-sm text-gray-700">{{ index + 1 }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ product.name }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ product.price }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ product.model }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ product.details }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useUsers } from '@/composables/useUsers'
import { useProducts } from '@/composables/useProducts'

const { users } = useUsers()
const { products } = useProducts()
</script>
