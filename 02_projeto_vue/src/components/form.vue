<template>
<div>
    <h2>Meu formulário:</h2>
  <form action="" @submit="enviarFormulario($event)">
    <div>
      <input type="text" v-model="name">
    </div>
    <div>
      <input type="text" v-model="email">
    </div>
    <div>
      <submit />
    </div>
  </form>
  <p>conteúdo</p>
  <p>conteúdo</p>
  <p>conteúdo</p>
  </div>
</template>
<script>
import inputText from "./form/inputText.vue";
import submit from "./form/submit.vue";

export default {
  name: "Form",
  components: {
    inputText,
    submit
  },
  data() {
    return {
      name: "",
      email: ""
    }
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      const name = this.name;
      const email = this.email;
      console.log("Formulário enviado");
      console.log("O nome é: " + name);
      console.log("O email é: " + email);

      // Ajax

      // Inserir no Banco de Dados
    }
  }
};
</script>
<style scoped>
  p {
    margin: 50px;
  }
</style>
