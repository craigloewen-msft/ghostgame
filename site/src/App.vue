<template>
  <div class="masterdiv">
    <h1>Welcome to the ghost game</h1>
    <h2>Protect your chocolate from the ghosts!</h2>
    <h1 v-if="gameOver">❌</h1>
    <h1 v-else>✔</h1>
    <GamePiece
      v-for="id in gamePieces"
      v-bind:key="id"
      v-on:gameOver="endGame()"
      :gameovergamepiece="gameOver"
    />
    <button v-on:click="resetGames()">Reset</button>
  </div>
</template>

<script>
import GamePiece from "./components/GamePiece.vue";

export default {
  name: "app",
  data: function() {
    return {
      gameOver: false,
      gamePieces: [1, 2, 3, 4]
    };
  },
  components: {
    GamePiece
  },
  methods: {
    endGame: function() {
      this.gameOver = true;
    },
    resetGames: function() {
      if (this.gameOver) {
        this.gameOver = false;
      } else {
        this.gameOver = true;
        let delayedReset = function() {
          this.gameOver = false;
        }.bind(this);
        setTimeout(delayedReset, 100);
      }
    }
  }
};
</script>

<style>
.masterdiv {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
