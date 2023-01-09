
const mutations =  {
    SET_CURRENT_LOADING: (state, loading) => {
        state.current.loading = loading;
      },
    SET_CURRENT: (state, article)=>{
      state.current.data = article.data;
      // state.current_article.links = article.meta.links;
    },

    SET_LIST: (state, article)=>{
      state.list.data = article.data;
      state.list.links = article.meta.links;
    },
    SET_LIST_LOADING: (state, loading) => {
        state.list.loading = loading;
    },

    SET_PA_LIST: (state, article)=>{
      state.pa_list.data = article.data;
      state.pa_list.links = article.meta.links;
    },
    SET_PA_LIST_LOADING: (state, loading) => {
        state.pa_list.loading = loading;
    },
    SET_CA_LIST: (state, article)=>{
      state.ca_list.data = article.data;
      state.ca_list.links = article.meta.links;
    },
    SET_CA_LIST_LOADING: (state, loading) => {
        state.ca_list.loading = loading;
    },

  }

 export default mutations;
