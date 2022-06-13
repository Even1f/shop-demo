// 扩展vue原有的功能：全局组件、自定义属性、挂载原型方法，注意：没有全局过滤器

import ShopSkeleton from './shop-skeleton.vue'
import ShopCarousel from './shop-carousel.vue'
import ShopMore from './shop-more.vue'

// 插件
export default {
  install(app) {
    app.component(ShopSkeleton.name, ShopSkeleton)
    app.component(ShopCarousel.name, ShopCarousel)
    app.component(ShopMore.name, ShopMore)
  }
}