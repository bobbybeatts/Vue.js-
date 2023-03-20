<template>
  <div>
    <img v-bind:src="imgSrc" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: "https://kr.vuejs.org/images/logo.ong",
    };
  },
};
</script>
