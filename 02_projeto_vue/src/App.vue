<template>
  <div>
    <PrimeiroComponente />
    <p>O dado da aplicação é: {{ testando }}</p>
    <lifecycle />
    <pessoa />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import lifecycle from './components/lifecycle.vue';
  import Pessoa from './components/pessoa.vue';
  export default {
    name: 'App', 
    components: {
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