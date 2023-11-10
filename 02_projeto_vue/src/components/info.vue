<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou buscando novas oportunidades</p>
    <p>Utilzo as seguintes linguagens para back-end:</p>
    <ul>
      <li
        v-for="(technology, index) in backend_technologies"
        v-bind:key="index"
      >
        {{ technology }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="technology in frontend_technologies" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
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
  props: {
    email: String,
    esta_trabalhando: Boolean
  },
  name: "Info",
  data() {
    return {
      mostrar_email: false,
      meu_link: "https://github.com/LuizBlume",
      textoBotao: "Mostrar email",
      backend_technologies: ['Javascript', 'PHP', 'Python', 'MySQL', 'Typescript'],
      frontend_technologies: [
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'Bootstrap'},
        {id: 4, language: 'Vue'},
        {id: 5, language: 'Javascript'}
      ]
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