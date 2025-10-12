<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
const title = "Modulo 2";
const nomeDoAluno = '<span style="color: blue;">Jefferson</span>';
const btnDisabled = false;
</script>

<template>
    <div>
        <h1 :title="title">Curso Vue.js Expert - {{ title }}</h1>
        <p v-html="nomeDoAluno"></p>
        <button :disabled="btnDisabled">Click me</button>
    </div>
</template>
