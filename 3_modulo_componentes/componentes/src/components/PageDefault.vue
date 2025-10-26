<script setup>
import { ref } from 'vue'

const secret = ref(false)

defineProps({
  pageTitle: String,
})

function showSecret() {
  secret.value = !secret.value
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold">
      {{ pageTitle || '' }}
    </h1>
    <div class="mt-4">
      <slot></slot>
      <button class="btn btn-primary btn-outline" @click="showSecret">
        <span v-if="secret">Esconder segredo</span><span v-else>Mostrar segredo</span>
      </button>
      <p v-if="secret">Shhh! Não conte para ninguém!</p>
    </div>
  </div>
</template>
