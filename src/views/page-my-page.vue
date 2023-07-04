<template>
  <div class="page-my-page-container"><span>Text</span></div>
</template>

<script>
export default {
  name: 'Page1MyPage',
  metaInfo: {
    title: 'Page1MyPage - Idle Neat Tiger',
    meta: [
      {
        property: 'og:title',
        content: 'Page1MyPage - Idle Neat Tiger',
      },
    ],
  },
}
</script>

<style scoped>
.page-my-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
}
</style>
