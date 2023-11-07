<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou buscando novas oportunidades</p>
    <p>Utilzo as seguintes linguagens:</p>
    <ul>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Python</li>
      <li>MySQL</li>
      <li>Vue</li>
      <li>Typescript</li>
    </ul>
    <div>
      <button @click="showEmail">{{textoBotao}}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>
    <p class="teste">
      Para acessar meu portifólio
      <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a>
    </p>
    <Picture />
  </div>
</template>
<script>
import Picture from "./picture.vue";
export default {
  components: {
    Picture,
  },
  name: "Info",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: false,
      email: "luiz.fernando.251107@gmail.com",
      meu_link: "https://github.com/LuizBlume",
      textoBotao: "Mostrar email"
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email
      if (!this.mostrar_email) {
        this.textoBotao = "Mostrar email"
      }
      else {
        this.textoBotao = "Esconder email"
      }
    }
  }
};
</script>

<style>
  .paragrafo-pai {
    color: rgb(128, 195, 255);
  }
</style>