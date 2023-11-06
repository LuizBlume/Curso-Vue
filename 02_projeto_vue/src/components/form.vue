<template>
<div>
    <h2>Meu formulário:</h2>
  <form action="">
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
};
</script>
