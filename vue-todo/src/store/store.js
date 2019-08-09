import Vue from 'vue' 
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters  from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

// Todo.vue


export const store = new Vuex.Store({
    
    modules  :{
        todoApp
    }
});


// export const store = new Vuex.Store({
//     state : {
//         todoItems : storage.fetch()
//     },
//     getters,
//     mutations
// });
