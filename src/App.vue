<template>
  <div id="app" class="container-sm">
    <ViewElement msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ViewElement from "./components/ViewElement.vue";

export default {
  name: "App",
  components: {
    ViewElement,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
