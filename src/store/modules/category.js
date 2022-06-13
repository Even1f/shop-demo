import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合，依赖topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    // 定义show和hide函数，控制当前分类的二级分类显示个隐藏
    show(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  actions: {
    async getList({ commit }) {
      const data = await findAllCategory()
      // 给每个数据加上控制二级分类显示隐藏的数据
      data.result.forEach(top => {
        top.open = false
      })
      commit('setList', data.result)
    }
  }
}
