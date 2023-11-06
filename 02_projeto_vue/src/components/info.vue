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
    <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>
  </div>
</template>
<script>
export default {
    name: 'Info',
    data() {
        return {
            esta_trabalhando: true,
            mostrar_email: false,
            email: 'luiz.fernando.251107@gmail.com'
        }
    }
}
</script>
