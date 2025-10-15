<script setup>
import { ref } from "vue";
const meuNome = ref("Jefferson");
const teste_vhtml = "<strong>Oi</strong>";
const mostrarNome = ref(false);
const teste_vfor = [1, 2, 3];

function mostrarNomeBtn() {
    mostrarNome.value
        ? (mostrarNome.value = false)
        : (mostrarNome.value = true);
    console.log(mostrarNome.value);
}
</script>

<template>
    <div>
        <h1>Testando Diretivas e Fundamentos</h1>
        <p>
            As diretivas são recursos especiais do Vue.js que permitem aplicar
            comportamento reativo ao DOM. Elas são prefixadas com "v-" e
            fornecem funcionalidades como renderização condicional (v-if,
            v-show), iteração de listas (v-for), vinculação de dados (v-model,
            v-bind), manipulação de eventos (v-on) e muito mais. As diretivas
            facilitam a criação de interfaces dinâmicas e interativas de forma
            declarativa.
        </p>
        <div>
            <h2>Testando V-Model</h2>
            <p>
                O v-model é usado para criar duas-way data binding entre um
                elemento de entrada e uma propriedade de dados. Ele permite que
                você atualize o valor do elemento de entrada e a propriedade de
                dados simultaneamente. Isso é útil para criar formulários
                interativos e atualizar os dados em tempo real.
            </p>
            <span>Digite seu Nome: </span>
            <input type="text" v-model="meuNome" />
            <p>{{ meuNome }}</p>
            <hr />
            <h2>Testando V-Text</h2>
            <p>
                O v-text é usado para renderizar conteúdo de texto dentro de um
                elemento HTML. Ele verifica uma expressão e, se for verdadeira,
                renderiza o texto. Se for falsa, o texto é removido do DOM.
            </p>
            <p v-text="meuNome"></p>
            <hr />
            <h2>Testando V-HTML</h2>
            <p>
                O v-html é usado para renderizar conteúdo HTML dentro de um
                elemento HTML. Ele verifica uma expressão e, se for verdadeira,
                renderiza o elemento HTML. Se for falsa, o elemento é removido
                do DOM.
            </p>
            <p v-html="teste_vhtml"></p>
            <hr />
            <h2>Testando V-Show</h2>
            <button @click.prevent="mostrarNomeBtn">
                <span v-if="mostrarNome">Esconder Nome</span>
                <span v-else>Mostrar Nome</span>
            </button>
            <p v-show="mostrarNome">{{ meuNome }}</p>
            <hr />
            <h2>Testando V-If e V-Else</h2>
            <p>
                O v-if é usado para renderizar condicionalmente um elemento
                HTML. Ele verifica uma expressão e, se for verdadeira, renderiza
                o elemento HTML. Se for falsa, o elemento é removido do DOM.
            </p>
            <p v-if="mostrarNome">{{ meuNome }}</p>
            <p v-else>Não há nome para mostrar</p>
            <hr />
            <h2>Testando V-For</h2>
            <ul>
                <li v-for="(item, index) in teste_vfor" :key="index">
                    {{ item }}
                </li>
            </ul>
            <hr />
            <h2>Testando V-On</h2>
            <p>O v-on é usado para adicionar eventos a elementos HTML.</p>
            <button v-on:click="mostrarNomeBtn">
                <span v-if="mostrarNome">Esconder Nome</span
                ><span v-else>Mostrar Nome</span>
            </button>
            <p v-show="mostrarNome">
                <strong>{{ meuNome }}</strong>
            </p>
            <hr />
            <h2>Testando V-Bind</h2>
            <p>
                O v-bind é usado para vincular propriedades de elementos HTML a
                propriedades de dados do Vue.
            </p>
            <img
                v-bind:src="'https://placehold.co/600x400'"
                v-bind:alt="meuNome"
            />
            <p>Imagem vinculada dinamicamente com v-bind</p>
            <hr />
            <h2>Testando V-Pre</h2>
            <p>
                O V-Pre é usado para evitar que o Vue compile o conteúdo do
                elemento.
            </p>
            <span v-pre>{{ Isso não vai ser compilado }}</span>
            <hr />
            <h2>Testando V-Once</h2>
            <p>
                O V-Once é usado para renderizar um elemento HTML apenas uma
                vez.
            </p>
            <span v-once>O meu nome nunca vai mudar: {{ meuNome }}</span>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
}
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
h1,
h2 {
    margin-bottom: 20px;
}
</style>
