<template>
  <div @click="logoClick" class="logo">
    <img
      src="https://dcdn.it120.cc/2021/07/04/85520975-2fbd-4699-a148-0bf87e74c675.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    logoClick() {
      let path = this.$route.path;
      if (path == "/home") {
        return;
      } else {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .logo img {
    max-height: 2.142857rem!important;
  }
}
.logo {
  box-sizing: border-box;
  padding: 0.714286rem 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.logo img {
  width: 100%;
}
</style>
