import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectDate: new Date(),
    currencyArray:[]
  },
  mutations: {
    
    SET(state, { field, value }) { state[field] = value;},
  },
  actions: {
    set({ commit }, { field, value }) { commit('SET', { field, value }) },
    async getCursOnDate({ commit }, params) {
      let res;
      try {
        res = await Vue.http.post("/cbrInfo", {
          model:"cbr",
          action: "GetCursOnDate",
          params
        });
        if(res.body.success) {
          commit("SET", {field:'currencyArray', value:res.body.result});
        }
      } catch (error) {
        console.log(error);
      } 
    }
  }
})
