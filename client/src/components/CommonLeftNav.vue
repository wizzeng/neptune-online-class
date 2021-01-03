<template>
  <nav class="common-left-nav">
    <el-avatar :size="size" :src="circleUrl"></el-avatar>
    <div class="bottom">
      <i class="el-icon-collection"></i>
      <i class="el-icon-chat-dot-square"></i>
      <i class="el-icon-tickets"></i>
      <i class="el-icon-setting"></i>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonLeftNav',
  data() {
    return {
      size: 48,
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
});
</script>

<style scoped lang="scss">
.common-left-nav {
  height: calc(100% - 40px);
  position: relative;
  margin: 20px 0;
  color: white;
  text-align: center;

  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
  }

  i {
    display: block;
    margin:  0 auto 30px auto;
    cursor: pointer;
    color: #c4c4c4;
    font-size: 23px;
    text-align: center;
    transition: all .5s;

    &:hover {
      color: white;
    }
  }
}
</style>
