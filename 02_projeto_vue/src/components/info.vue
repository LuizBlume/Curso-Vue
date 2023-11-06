<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p>Utilzo as seguintes linguagens:</p>
    <ul>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Python</li>
      <li>MySQL</li>
      <li>Vue</li>
      <li>Typescript</li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'Info',
    data() {
        return {
            esta_trabalhando: true
        }
    }
}
</script>
