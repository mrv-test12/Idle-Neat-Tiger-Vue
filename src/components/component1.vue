<template>
  <div class="component1-container" v-bind:class="rootClassName">
    <button class="button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component1-container {
  display: flex;
  position: relative;
}
.component1-root-class-name {
  align-self: center;
  margin-left: 50px;
}
</style>
