// 提供复用逻辑函数

import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

/**
 * 
 * @param {Element} target Dom对象
 * @param {Function} apiFn API函数
 */
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersecting 是否进入可视区
      if (isIntersecting) {
        stop()
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    // 配置选项
    {
      threshold: 0
    }
  )
  return { result, target }
}
