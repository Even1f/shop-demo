import { createStore } from 'vuex'

const moduleA = {
  state: {
    userName: 'moduleA'
  }
}
const moduleB = {
  namespaced: true,
  state: {
    userName: 'moduleB'
  }
}

export default createStore({

  modules: {
    moduleA,
    moduleB
  }



  // state: {
  //   username: 'zs'
  // },
  // getters: {
  //   newName(state) {
  //     return state.username + '!!!'
  //   }
  // },
  // mutations: {
  //   updatedName(state) {
  //     state.username = 'ls'
  //   }
  // },
  // actions: {
  //   updatedName(ctx) {
  //     setTimeout(() => {
  //       ctx.commit('updatedName')
  //     }, 2000);
  //   }
  // },
  // modules: {
  // }
})
