import { createStore } from 'vuex'
// vuex 持久化
import createPersistedState from 'vuex-persistedstate'

// 模块
import cart from '@/store/modules/cart'
import user from '@/store/modules/user'
import category from '@/store/modules/category'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    category,
    user
  },
  // 持久化默认存储在localStorage中
  plugins: [createPersistedState({
    key: 'rabbit-store',
    paths: ['cart', 'user']
  })]
})
