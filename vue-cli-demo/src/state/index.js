
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//vuex状态管理
///创建状态仓库，注意Store,state不能改
//直接通过this.$sore.state.XXX拿到全局状态(也可以通过getters加工拿取)

export default new Vuex.Store({
  state:{
    num:100
  },

  // mucations可以直接操作数据(只能进行同步操作)
  mutations:{
    addNum:function (state) {
      state.num += 10
    },
    reducenum(state){
      state.num -= 10
    }
  },

  //actions里面不能直接改变数据，只能通过mutations改变数据（这里面可以执行异步操作）
  actions:{
    addNumAction:function (context) {
      context.commit('addNum')
    },
    reducenumAction:function (context) {
      context.commit('reducenum')
    }
  },

  //getters可以对数据进行预处理
  getters:{
    getNum(state){
      return state.num >0 ? state.num : 0
    }
  }

})
