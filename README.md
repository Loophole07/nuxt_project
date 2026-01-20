<template>
  <div class="flex min-h-screen bg-gray-100 relative">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 flex flex-col justify-between">
      <div>
        <h2 class="text-2xl font-bold mb-8 text-center tracking-wide">Admin Panel</h2>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      :class="{ 'bg-gray-700': route.path === '/' }">
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin" class="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      :class="{ 'bg-gray-700': route.path === '/admin' }">
              Index
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users" class="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      :class="{ 'bg-gray-700': route.path.startsWith('/users') }">
              Users
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      :class="{ 'bg-gray-700': route.path.startsWith('/products') }">
              Products
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink to="/about" class="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      :class="{ 'bg-gray-700': route.path === '/about' }">
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
      <p class="text-center text-gray-400 text-sm mt-8">&copy; 2026 Company</p>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6 relative">
      <!-- Navbar -->
      <nav class="bg-white p-4 rounded-xl shadow-md flex justify-between items-center mb-6">
        <h1 class="text-xl font-semibold text-gray-800">Welcome, Admin</h1>
        
      </nav>

      <!-- Page content -->
      <NuxtPage />

      <!-- Scroll to Top Button -->
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        ↑ Top
      </button>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const showScrollTop = ref(false)

// Show button when scrolled down
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200
}

// Scroll smoothly to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
