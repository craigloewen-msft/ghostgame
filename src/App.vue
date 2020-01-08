<template>
  <div id="app">
    <div class="centered">
      
      <CatPaw/>
      <div>
        <h1 style="text-align:center;">Press the Button</h1>
      </div>
    </div>
  </div>
</template>

<script>
import CatPaw from "./components/CatPaw.vue";

export default {
  name: "app",
  components: {
    CatPaw
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
