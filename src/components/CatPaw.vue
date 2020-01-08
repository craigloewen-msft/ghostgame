<template>
  <div>
    <button type="button" class="btn btn-lg btn-toggle" v-on:click="togglePaw" id="main-button">
      <div class="handle"></div>
    </button>
    <div class="catpaw-container" v-bind:class="{ catpawextended: pawToggled }">
      <img class="catpaw-image" alt="myImage" src="../assets/catpaw.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CatPaw",
  data: function() {
    return {
      pawToggled: false
    };
  },
  methods: {
    togglePaw: function() {
      this.pawToggled = !this.pawToggled;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.example .btn-toggle {
  top: 50%;
  transform: translateY(-50%);
}
.btn-toggle {
  margin: 0 4rem;
  padding: 0;
  position: relative;
  border: none;
  height: 1.5rem;
  width: 3rem;
  border-radius: 1.5rem;
  color: #6b7381;
  background: #bdc1c8;
}
.btn-toggle:focus,
.btn-toggle.focus,
.btn-toggle:focus.active,
.btn-toggle.focus.active {
  outline: none;
}
.btn-toggle:before,
.btn-toggle:after {
  line-height: 1.5rem;
  width: 4rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle:before {
  left: -4rem;
}
.btn-toggle:after {
  right: -4rem;
  opacity: 0.5;
}
.btn-toggle > .handle {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 1.125rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.active {
  transition: background-color 0.25s;
}
.btn-toggle.active > .handle {
  left: 1.6875rem;
  transition: left 0.25s;
}
.btn-toggle.active:before {
  opacity: 0.5;
}
.btn-toggle.active:after {
  opacity: 1;
}
.btn-toggle:before,
.btn-toggle:after {
  color: #6b7381;
}
.btn-toggle.active {
  background-color: #29b5a8;
}
.btn-toggle.btn-lg {
  margin: 0 5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 30rem;
  width: 60rem;
  border-radius: 30rem;
}
.btn-toggle.btn-lg:focus,
.btn-toggle.btn-lg.focus,
.btn-toggle.btn-lg:focus.active,
.btn-toggle.btn-lg.focus.active {
  outline: none;
}
.btn-toggle.btn-lg:before,
.btn-toggle.btn-lg:after {
  line-height: 30rem;
  width: 5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle.btn-lg:before {
  left: -5rem;
}
.btn-toggle.btn-lg:after {
  right: -5rem;
  opacity: 0.5;
}
.btn-toggle.btn-lg > .handle {
  position: absolute;
  top: 3.75rem;
  left: 3.75rem;
  width: 22.5rem;
  height: 22.5rem;
  border-radius: 22.5rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.btn-lg.active {
  transition: background-color 0.25s;
}
.btn-toggle.btn-lg.active > .handle {
  left: 33.75rem;
  transition: left 0.25s;
}
.btn-toggle.btn-lg.active:before {
  opacity: 0.5;
}
.btn-toggle.btn-lg.active:after {
  opacity: 1;
}
.centered {
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.catpaw-container {
  height: 80rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -200%);
  transition: transform 0.6s;
}
.catpaw-image {
  height: 100%;
  transform: rotate(180deg);
}
.catpawextended {
  transform: translate(-10%, -80%);
}
@media (min-height: 800px) {
  .centered {
    top: 400px;
  }
  .catpawextended {
    transform: translate(-10%, -650px);
  }
}
.preload * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}
</style>
