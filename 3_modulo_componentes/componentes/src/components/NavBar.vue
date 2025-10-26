<script setup>
const menus = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Article',
    route: '/article',
  },
  {
    label: 'About',
    route: '/about',
  },
]
</script>

<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <button class="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="menu in menus" :key="menu.label">
          <router-link :to="menu.route">{{ menu.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
