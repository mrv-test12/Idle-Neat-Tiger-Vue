<template>
  <div class="test-page-container">
    <button type="button" class="button">Button</button>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  metaInfo: {
    title: 'testPage - Idle Neat Tiger',
    meta: [
      {
        property: 'og:title',
        content: 'testPage - Idle Neat Tiger',
      },
    ],
  },
}
</script>

<style scoped>
.test-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #D9D9D9;
}
</style>
