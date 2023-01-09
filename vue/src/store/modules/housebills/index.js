import actions from "./actions";
import mutations from "./mutations";
export default {
  namespaced: true,
  state () {
      return {
        current: {
          loading: false,
          data: []
        },
        list: {
          loading: false,
          links: [],
          data: []
        },
        pa_list: {
          loading: false,
          links: [],
          data: []
        },
        ca_list: {
          loading: false,
          links: [],
          data: []
        },

      }
  },
  actions: actions,
  mutations: mutations
}
