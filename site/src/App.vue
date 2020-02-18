<template>
  <div>
    <div class="serverStatus" v-if="isServerConnected">
      <h3>Connected to server!</h3>
    </div>
    <div class="masterdiv">
      <h1>Welcome to the ghost game</h1>
      <h2>Protect your chocolate from the ghosts!</h2>
      <h1 v-if="gameOver && !firstRun">❌</h1>
      <h1 v-else>✔</h1>
      <GamePiece
        v-for="id in gamePieces"
        v-bind:key="id"
        v-on:gameOver="endGame(true)"
        :gameovergamepiece="gameOver"
      />
      <br/>
      <a href="#" class="resetButton" v-on:click="resetGames(true)">Reset</a>
    </div>
  </div>
</template>

<script>
import GamePiece from "./components/GamePiece.vue";

export default {
  name: "app",
  data: function() {
    return {
      gameOver: true,
      gamePieces: [1, 2, 3],
      isServerConnected: false,
      serverSocket: null,
      firstRun: true
    };
  },
  components: {
    GamePiece
  },
  methods: {
    endGame: function(sendMessage) {
      this.gameOver = true;
      if (sendMessage == true) {
        this.sendServerMessage("gameover");
      }
    },
    resetThis: function() {
      if (this.gameOver) {
        this.gameOver = false;
      } else {
        this.gameOver = true;
        let delayedReset = function() {
          this.gameOver = false;
        }.bind(this);
        setTimeout(delayedReset, 100);
      }
    },
    resetGames: function(sendMessage) {
      if (!this.isServerConnected) {
        this.resetThis();
      }

      if (sendMessage == true) {
        this.sendServerMessage("reset");
      }
    },
    handleServerMessages(evt) {
      console.log("Received message:", evt);
      if (evt.data == "forcegameover") {
        this.endGame(false);
      } else if (evt.data == "forcereset") {
        this.resetThis();
      }
    },
    sendServerMessage(message) {
      if (this.isServerConnected) {
        this.serverSocket.send(message);
      }
    },
    connectToServer() {
      this.serverSocket = new WebSocket("ws://localhost:9999");

      let onOpenFunction = function() {
        this.isServerConnected = true;
      }.bind(this);

      let onMessageReceived = function(evt) {
        this.handleServerMessages(evt);
      }.bind(this);

      this.serverSocket.onopen = onOpenFunction;

      this.serverSocket.onmessage = onMessageReceived;

      this.serverSocket.onclose = function() {
        // websocket is closed.
        console.log("Connection is closed...");
      };

      this.serverSocket.onerror = function() {
        console.log("Error in socket");
        this.isServerConnected = false;
      };
    }
  },
  watch: {
    gameOver: function(val) {
      if (this.firstRun) {
        if (val == true) {
          this.firstRun = false;
        }
      }
    }
  },
  created: function() {
    this.connectToServer();
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

.serverStatus {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  font-size: 0.5em;
}

.resetButton {
  background-color:#e81224;
  border-radius: 5px;
  text-decoration: none;
  color: #eaeaea;
  border: 4px solid black;
  padding: 10px 20px 10px 20px;
}
</style>
