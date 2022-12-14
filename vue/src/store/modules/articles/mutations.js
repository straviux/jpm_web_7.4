
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
    SET_FEATURED: (state, article)=>{
      state.featured.data = article.data;
      state.featured.links = article.meta.links;
    },
    SET_FEATURED_LOADING: (state, loading) => {
        state.list.loading = loading;
    },

    SET_CATEGORY_LIST: (state, category) => {
        state.category.data = category.data;
        state.category.links = category.meta.links;
    },
    SET_CATEGORY_LOADING: (state, loading) => {
        state.category.loading = loading;
    },

  }

 export default mutations;
