// 扩展vue原有的功能：全局组件、自定义属性、挂载原型方法，注意：没有全局过滤器

import defaultImg from '@/assets/images/200.png'
// import ShopSkeleton from './shop-skeleton.vue'
// import ShopCarousel from './shop-carousel.vue'
// import ShopMore from './shop-more.vue'
// import ShopBread from './shop-bread'
// import ShopBreadItem from './shop-bread-item'

// context(目录路径,是否加载子目录,加载文件的匹配正则)
const importFn = require.context('./', false, /\.vue$/)


// 插件
export default {
  install(app) {
    // app.component(ShopSkeleton.name, ShopSkeleton)
    // app.component(ShopCarousel.name, ShopCarousel)
    // app.component(ShopMore.name, ShopMore)
    // app.component(ShopBread.name, ShopBread)
    // app.component(ShopBreadItem.name, ShopBreadItem)

    // 根据keys批量注册
    importFn.keys().forEach(path => {
      const component = importFn(path).default
      app.component(component.name, component)
    })

    // // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = (app) => {
  //1. 图片懒加载
  // 原理： 先存储图片地址 不能在src上，当图片进入可视区，将存储的图片地址设置给图片元素即可
  app.directive('lazy', {
    // vue2.0 监听使用指令的DOM是否创建好，钩子函数： inserted
    // vue3.0 的指令拥有的钩子和组件的一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      // 2. 创建一个观察对象，来观察当前使用指令的对象
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          //3. 把指令的值设置给el的src binding.value就是指令的值
          // 4. 处理图片加载失败
          el.onerror = () => {
            // 加载失败，设置默认图
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      // 开启观察
      observe.observe(el)
    },
  })
}