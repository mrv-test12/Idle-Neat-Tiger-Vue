<template>
  <div class="dmsgbjhshgjfjgjmytergevhfhdfn-container">
    <span class="myNewButton<classs">Text</span>
    <app-component1 rootClassName="component1-root-class-name"></app-component1>
    <button class="dmsgbjhshgjfjgjmytergevhfhdfn-button list button">
      Button
    </button>
    <img
      alt="image"
      src="https://play.teleporthq.io/static/svg/default-img.svg"
      class="dmsgbjhshgjfjgjmytergevhfhdfn-image"
    />
    <span>Text</span>
  </div>
</template>

<script>
import AppComponent1 from '../components/component1'

export default {
  name: 'Dmsgbjhshgjfjgjmytergevhfhdfn',
  components: {
    AppComponent1,
  },
  metaInfo: {
    title: 'dmsgbjhshgjfjgjmytergevhfhdfn - Idle Neat Tiger',
    meta: [
      {
        property: 'og:title',
        content: 'dmsgbjhshgjfjgjmytergevhfhdfn - Idle Neat Tiger',
      },
    ],
  },
}
</script>

<style scoped>
.dmsgbjhshgjfjgjmytergevhfhdfn-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dmsgbjhshgjfjgjmytergevhfhdfn-button {
  width: 820px;
  height: 52px;
}
.dmsgbjhshgjfjgjmytergevhfhdfn-image {
  flex: 1;
  left: 0px;
  width: 100px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: stretch;
  object-fit: cover;
}
@media(max-width: 479px) {
  .dmsgbjhshgjfjgjmytergevhfhdfn-container {
    align-items: center;
  }
  .dmsgbjhshgjfjgjmytergevhfhdfn-image {
    align-self: flex-start;
  }
}
</style>
