<template>
  <div class="subscribe-search-tab">
    <div class="search-box">
      <el-input placeholder="搜索课程" v-model="search">
        <template #suffix>
          <i class="el-icon-search" @click="attemptSearch"></i>
        </template>
      </el-input>
    </div>
    <div class="subscribe-tab">
      <div v-for="item in tabItems" :key="item.id" class="subscribe-item" :title="item.title">
        <el-avatar :size="60" :src="item.url"></el-avatar>
        <p class="title">{{ item.title }}</p>
      </div>
      <div class="divider"></div>
      <div v-for="item in tabItems" :key="item.id" class="subscribe-item" :title="item.title">
        <el-avatar :size="60" :src="item.url"></el-avatar>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubscribeTab',
  props: {
    tabItems: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    attemptSearch(): void {
      this.search = '';
    },
  },
});
</script>

<style lang="scss" scoped>
$tab-height: 100px;

.subscribe-search-tab {
  display: flex;
  height: $tab-height;
  border-bottom: 1px solid #e0e0e0;

  .divider {
    height: 100%;
    width: 1px;
    background-color: grey;
  }

  .subscribe-tab {
    display: flex;
    padding: 2px 0;
    width: calc(100% - 300px);
    overflow-x: auto;
    flex-grow: 1;

    .subscribe-item {
      width: 78px;
      cursor: pointer;
      text-align: center;

      ::v-deep .el-avatar {
        box-shadow: 0 0 5px #6363637d;
      }

      .title {
        display: block;
        margin: 5px 0 5px 0;
        font-size: 10px;
        line-height: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .el-icon-search {
    font-size: 14px;
    line-height: 40px;
    margin-right: 10px;
    cursor: pointer;
  }

  .search-box {
    margin: 20px 10px 0 10px;
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;

    ::v-deep(input) {
      border-radius: 20px;
    }
  }
}
</style>
