<template>
  <div
    class="chocolateIcon"
    v-bind:style="{ 'margin-left': leftmargin + '%' }"
  >🍫</div>
</template>

<script>
export default {
  name: "Chocolate",
  data: function() {
    return {
      leftmargin: this.position
    };
  },
  props: ["position"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chocolateIcon {
  font-size: 72px;
  text-align: left;
  transition-property: margin-left;
  transition-duration: 0.5s;
  position: absolute;
}
</style>
