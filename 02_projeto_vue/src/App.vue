<template>
  <div>
    <Header :esta_logado="true"/>
    <PrimeiroComponente />
    <p class="paragrafo-pai">O dado da aplicação é: {{ testando }}</p>
    <lifecycle />
    <pessoa />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import lifecycle from './components/lifecycle.vue';
  import Pessoa from './components/pessoa.vue';
  export default {
    name: 'App', 
    components: {
      Header,
      PrimeiroComponente,
      lifecycle,
      Pessoa
    },
    data() {  
      return {
        testando: "Teste"
      }
    }
  }
</script>
<style>
  body {
    background-color: #333;
    color: #FFF;
  }
  a {
    color: #6dc5ff;
  }
  .teste {
    background-color: #000;
  }
</style>