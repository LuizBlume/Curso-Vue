<template>
  <div>
    <PrimeiroComponente />
    <p>O dado da aplicação é: {{ testando }}</p>
    <lifecycle />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import lifecycle from './components/lifecycle.vue';
  export default {
    name: 'App', 
    components: {
      PrimeiroComponente,
      lifecycle
    },
    data() {
      return {
        testando: "Teste"
      }
    }
  }
</script>