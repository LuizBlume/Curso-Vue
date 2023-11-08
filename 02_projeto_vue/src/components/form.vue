<template>
<div>
    <h2>Meu formulário:</h2>
  <form action="" @submit="enviarFormulario">
    <div>
      <inputText />
    </div>
    <div>
      <inputText />
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
  methods: {
    enviarFormulario() {
      console.log("Formulário enviado")
    }
  }
};
</script>
<style scoped>
  p {
    margin: 50px;
  }
</style>
