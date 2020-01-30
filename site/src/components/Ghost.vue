<template>
  <div
    class="ghostIcon unselectable"
    v-bind:style="{ 'margin-left': leftmargin + '%' }"
    v-on:click="clicked"
  >👻</div>
</template>

<script>
export default {
  name: "Ghost",
  data: function() {
    return {
      leftmargin: 100,
      advanceSecAmountMean: 1000,
      advanceSecAmountDev: 1000,
      advancePercAmountMean: 10,
      advancePercAmountDev: 5,
      pushbackAmount: 50,
      lastMoveTimeout: null,
      moving: true
    };
  },
  created: function() {
    this.advanceandWait();
  },
  methods: {
    clicked: function() {
      this.pushback();
    },
    getRandomNumber: function(mean, dev) {
      return Math.floor((Math.random() - 0.5) * dev + mean);
    },
    checkWin: function() {
      if (this.leftmargin <= this.goal) {
        return true;
      } else {
        return false;
      }
    },
    advance: function() {
      if (this.leftmargin > this.goal) {
        this.leftmargin =
          this.leftmargin -
          this.getRandomNumber(
            this.advancePercAmountMean,
            this.advancePercAmountDev
          );
        if (this.leftmargin < this.goal) {
          this.leftmargin = this.goal;
        }
      }

      if (this.checkWin()) {
        console.log("Game won!");
        this.moving = false;
        this.$emit("goalComplete");
      }
    },

    pushback: function() {
      if (this.moving) {
        this.leftmargin = this.leftmargin + this.pushbackAmount;
      }
    },
    advanceandWait: function() {
      if (this.moving && this.gameoverghost == false) {
        this.advance();
        let delayAmount = this.getRandomNumber(
          this.advanceSecAmountMean,
          this.advanceSecAmountDev
        );
        //   console.log("DelayAmount",delayAmount);
        this.lastMoveTimeout = setTimeout(this.advanceandWait, delayAmount);
      }
    }
  },
  props: ["goal", "gameoverghost"],
  watch: {
    gameoverghost: function(newValue) {
      if (newValue == false) {
        this.moving = true;
        this.leftmargin = 100;
        this.advanceandWait();
      } else {
        this.moving = false;
        if (this.lastMoveTimeout != null) {
          clearTimeout(this.lastMoveTimeout);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ghostIcon {
  font-size: 72px;
  text-align: left;
  transition-property: margin-left;
  transition-duration: 0.1s;
  position: absolute;
}
</style>
