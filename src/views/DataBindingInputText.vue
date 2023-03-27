<template>
  <div>
    <input type="text" v-model="valueModel" v-focus />
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueModel: "South Korea",
    };
  },
};
</script>
