<template>
  <div class="course-item">
    <div class="image">
      <el-image
        :src="img"
        fit="fit"></el-image>
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subTitle }}</p>
      <div class="bottom-text">
        <span class="teacher">{{ teacher }}</span>
        <span v-if="studentCount" class="student-count">{{ studentCount }} 人参加中</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      require: true,
    },
    subTitle: {
      type: String,
      require: true,
    },
    teacher: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    studentCount: {
      type: Number,
      require: false,
    },
    // 是否在直播
    isLive: {
      type: Boolean,
      default: false,
    },
    locked: {
      type: Boolean,
      default: false,
    },
  },

});
</script>

<style lang="scss" scoped>
.course-item {
  display: inline-block;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 8px white;
  transition: all .5s;

  &:hover {
    box-shadow: 0 0 8px #c4c4c4;
  }

  .image {
    width: 300px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
  }

  p {
    margin: 6px 0 0 0;
  }

  .title {
    line-height: 18px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }

  .subtitle {
    line-height: 12px;
    font-size: 12px;
    font-weight: normal;
    color: #666;
  }

  .bottom-text {
    position: relative;
    .teacher {
      line-height: 12px;
      font-size: 12px;
      font-weight: normal;
      color: #999;
    }
    .student-count {
      position: absolute;
      right: 0;
    }
  }
}
</style>
