<template>
  <main class="p-10">
    <h1>Home</h1>
    <button class="btn btn-primary" @click="navigateToAbout">About</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToAbout() {
  router.push('/about')
}
</script>
