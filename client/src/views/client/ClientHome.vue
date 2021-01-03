<template>
  <base-page content-padding="0">
    <template #content>
      <div class="content-course">
        <subscribe-tab :tab-items="subscribe"></subscribe-tab>
        <div class="course-intro">
          <div class="ad-carousel">
            <el-carousel :interval="5000" arrow="always" height="500px">
              <el-carousel-item v-for="item in 4" :key="item">
                <div>
                  <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" fit="contain"/>
                  <h3>{{ item }}</h3>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="ad-blocks">
            <h3>课程推荐</h3>
            <course-intro-item v-for="i in 10" :key="i"
                               img="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                               :locked="false"
                               title="编程必备基础 计算机组成原理+操作系统+计算机网络" sub-title="副标题" teacher="教师"/>
          </div>
        </div>
      </div>
    </template>
    <template #left>
      <common-left-nav/>
    </template>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasePage from '@/components/BasePage.vue';
import CourseIntroItem from '@/components/CourseIntroItem.vue';
import SubscribeTab from '@/components/SubscribeSearchTab.vue';
import CommonLeftNav from '@/components/CommonLeftNav.vue';

export default defineComponent({
  components: {
    BasePage,
    CourseIntroItem,
    SubscribeTab,
    CommonLeftNav,
  },
  data() {
    return {
      subscribe: new Array(10).fill(undefined).map((_) => ({
        id: 1,
        url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        title: 'Google资深工程师深度讲解Go语言 由浅入深打通Go学习路线',
      })),
      search: '',
    };
  },
});
</script>

<style lang="scss" scoped>
::v-deep(.course-item) {
  margin: 10px;
}

::v-deep(.page) {
  padding: 0;
}

.content-course {
  padding: 20px 0 0 20px;
  height: 100vh;
  overflow-y: auto;

  .course-intro {
    margin-top: 20px;
    margin-right: 20px;

    .ad-carousel {
      border-radius: 10px;
      overflow: hidden;
      margin: auto;
      width: 90%;
      max-width: 1200px;
      height: 500px;
    }
  }
}
</style>
