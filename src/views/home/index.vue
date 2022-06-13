<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <!-- vue动画 -->
  <button @click="show = true">显示</button>
  <button @click="show = false">隐藏</button>
  <Transition>
    <div v-show="show" class="box"></div>
  </Transition>
</template>

<script>
import { ref } from 'vue'
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  },
  setup() {
    const show = ref(true)
    return { show }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
}

// 使用transition 组件实现动画
// 进入：进入前       进入中       进入后
//  v-enter-from v-enter-active v-enter-to
// 离开：离开前       离开中       离开后
//  v-leave-from v-leave-active v-leave-to

.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 2s;
}
.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 2s;
}
.v-leave-to {
  opacity: 0;
}
</style>

