<template>
  <div style="height:100px;">
    <Chocolate class="unselectable" position="5" />
    <Ghost class="unselectable" v-on:goalComplete="endGame()" goal="5" :gameoverghost="gameovergamepiece" />
  </div>
  <!-- <ChildSwitch v-on:childswitchswitched="switchHit($event)"/> -->
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import Ghost from "./Ghost.vue";
import Chocolate from "./Chocolate.vue";

export default {
  name: "GamePiece",
  data: function() {
    return {
      gameOver: false
    };
  },
  components: {
    Ghost,
    Chocolate
  },
  methods: {
    endGame: function() {
      this.gameOver = true;
      this.$emit("gameOver");
    }
  },
  props: ["gameovergamepiece"]
};
</script>

<style>
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
