import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex);

// Todo.vue

const storage = {
    fetch () {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    // this.todoItems.push(localStorage.key(i));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
                }
                // localStorage.key(i);
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state : {
        todoItems : storage.fetch()
    },
    mutations : {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            // 저장 하는 로직 
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, todo) {
            // todoItem.completed = !todoItem.completed;  //직접 적인 데이터를 조작 하는것 보단 todoItems 를 바꾸는게 좋다
            state.todoItems[todo.index].completed = !state.todoItems[todo.index].completed;
            // this.todoItems[index].completed = !this.todoItems[index].completed;
            // //로컬 스토리지의 데이터 갱신 update 기능이 없어서 지우고 넣는다.
            localStorage.removeItem(todo.todoItem.item)
            localStorage.setItem(todo.todoItem.item, JSON.stringify(todo.todoItem))
        },
        clearOneItem(state) {
            localStorage.clear();
            state.todoItems = [];
        }

    }
    

    
});
