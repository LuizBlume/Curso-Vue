<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>
<script>
    export default {
        name: 'lyfecycle',
        data() {
            return {
                nome: 'Ainda não sei'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = 'Ganso'
            }, 1000);
        },
        mounted() {
            setTimeout(() => {
                this.nome = 'Luiz'
            }, 2000)
        }
    }
</script>