<template>
  <div class="screen1-container"></div>
</template>

<script>
export default {
  name: 'Screen1',
  metaInfo: {
    title: 'Idle Neat Tiger',
    meta: [
      {
        property: 'og:title',
        content: 'Idle Neat Tiger',
      },
    ],
  },
}
</script>

<style scoped>
.screen1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
