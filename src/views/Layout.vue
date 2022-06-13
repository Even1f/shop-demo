<template>
  <!-- 顶部通栏 -->
  <Appnavbar />
  <!-- 头部组件 -->
  <Appheader />
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <Appfooter />
</template>

<script>
import Appnavbar from '@/components/app-navbar.vue'
import Appheader from '@/components/app-header.vue'
import Appfooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Appnavbar,
    Appheader,
    Appfooter,
    AppHeaderSticky
  },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less">
</style>

