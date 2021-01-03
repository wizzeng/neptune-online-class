<template>
  <div class="page" :style="{ background: bgc}">
    <div class="left" :style="{ width: leftWidth}">
      <slot name="left"></slot>
    </div>
    <div class="content" :style="{ boxShadow: contentBoxShadow, padding: contentPadding }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePage',
  props: {
    bgc: {
      type: String,
      default: '#2e2c38',
    },
    contentBoxShadow: {
      type: String,
      default: '-2px -2px 8px #201F28',
    },
    contentPadding: {
      type: String,
      default: '25px',
    },
    leftWidth: {
      type: String,
      default: '80px',
    },
  },
  mounted() {
    document.body.style.background = this.bgc;
  },
  unmounted() {
    document.body.style.background = 'initial';
  },
});
</script>

<style scoped lang="scss">
$radius: 50px;

.page {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  .left {
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .content {
    overflow: hidden;
    flex-grow: 1;
    background-color: #fff;
    border-top-left-radius: $radius;
  }

}
</style>
