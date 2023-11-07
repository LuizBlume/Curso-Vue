<template>
  <img :src="avatar" alt="" />
</template>
<script>
export default {
  name: "Picture",
  data() {
    return {
      avatar: "/img/avatar.png",
      descricao: "Luiz Fernando",
    };
  },
};
</script>
