import axiosClient from "../../../axios";
const actions = {
  getById({commit}, id) {
        commit("SET_CURRENT_LOADING", true);
        return axiosClient
        .get(`/housebills/${id}`)
        .then((res)=>{
          console.log(res);
          commit("SET_CURRENT",res.data);
          commit("SET_CURRENT_LOADING", false);
          return res;
        })
        .catch((err)=>{
          commit("SET_CURRENT_LOADING", false);
          throw err;
        })
      },
  getList({commit},{url = null,is_pa=null,pageCount=null,status=null, search=null} = {}) {
        commit("SET_LIST_LOADING", true);
        url = url || '/housebills/'
        return axiosClient
        .get(url,{params:{is_pa:is_pa,pageCount:pageCount,status:status,search:search}})
        .then((res)=>{
          commit("SET_LIST",res.data);
          commit("SET_LIST_LOADING", false);
          return res;
        })
        .catch((err)=>{
          commit("SET_LIST_LOADING", false);
          throw err;
        })
      },



  getPrincipalAuthoredList({commit},{url = null,is_pa=1,pageCount=null,status=null,search=null} = {}) {
    commit("SET_PA_LIST_LOADING", true);
    url = url || '/housebill-list/'
    return axiosClient
      .get(url,{params:{is_pa:is_pa,pageCount:pageCount,search:search}})
      .then((res)=>{

          commit("SET_PA_LIST",res.data);
          commit("SET_PA_LIST_LOADING", false);
        return res;
      })
      .catch((err)=>{
        commit("SET_PA_LIST_LOADING", false);
        throw err;
      })
  },
  getCoAuthoredList({commit},{url = null,is_pa=0,pageCount=null,status=null,search=null} = {}) {
    commit("SET_CA_LIST_LOADING", true);
    url = url || '/housebill-list/'
    return axiosClient
      .get(url,{params:{is_pa:is_pa,pageCount:pageCount,search:search}})
      .then((res)=>{
          console.log(res)
          commit("SET_CA_LIST",res.data);
          commit("SET_CA_LIST_LOADING", false);
        return res;
      })
      .catch((err)=>{
        commit("SET_CA_LIST_LOADING", false);
        throw err;
      })
  },

  saveHousebill({commit},housebill){
      commit("SET_CURRENT_LOADING", true);
        let response;
        if(housebill.id) {
          response = axiosClient.put(`/housebills/${housebill.id}`, housebill)
          .then((res)=>{
            commit("SET_CURRENT", res.data);
            commit("SET_CURRENT_LOADING", false);
            return res;
          })
        } else {
          response = axiosClient.post("/housebills", housebill).then((res)=>{
            commit("SET_CURRENT", res.data);
            commit("SET_CURRENT_LOADING", false);
            return res;
          })
        }
        return response;
  },
}

export default actions
