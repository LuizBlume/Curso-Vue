<template>
  <div>
    <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro(txt3, $event)">Ativar Múltiplos Eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>
<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
        multiplos_eventos: "",
        txt1: "Primeiro Evento",
        txt2: "Segundo evento",
        txt3: ""
    }
  },
  methods: {
    primeiro(txt1, e) {
        this.multiplos_eventos = txt1;
    },
    segundo(txt2, e) {
        setTimeout(() => this.multiplos_eventos = txt2, 500)
    },
    terceiro(txt3, e) {
        setTimeout(() => this.multiplos_eventos = txt3, 1500)
    }
  }
};
</script>
<style scoped>
div {
  margin: 100px;
}
</style>
