<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포턴트의 메서드 명"></TodoInput> -->
    <!-- <TodoInput v-on:addTodoItem="addOneItem" ></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려 보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// var my_cmp = {
//   template : '<div>my component</div>'
// };

// new Vue({
//   el : '#app',
//   components : {
//     // '컴포넌트 이름' :  '컴포넌트 내용'
//     'my-cmp' : my_cmp 
//   }
// })


export default {
//  data (){
//         return {
//             todoItems : []
//         }
//   },
  methods :{
    // addOneItem (todoItem) {
    //    const obj = {completed : false , item : todoItem};
    //   // 저장 하는 로직 
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem (todoItem, index){
    //     localStorage.removeItem(todoItem.item);
    //     this.todoItems.splice(index , 1);
    // },
    // toggleOneItem (todoItem, index) {
    //     // todoItem.completed = !todoItem.completed;  //직접 적인 데이터를 조작 하는것 보단 todoItems 를 바꾸는게 좋다
    //     this.todoItems[index].completed = !this.todoItems[index].completed;
    //     //로컬 스토리지의 데이터 갱신 update 기능이 없어서 지우고 넣는다.
    //     localStorage.removeItem(todoItem.item)
    //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    // },
    // clearOneItem (){
    //     localStorage.clear();
    //     this.todoItems = [];
    // }


  },
  // created () {
  //       if(localStorage.length > 0){
  //           for (let i =0; i < localStorage.length; i++){
  //               if(localStorage.key(i) !== "loglevel:webpack-dev-server" ){
  //                   // this.todoItems.push(localStorage.key(i));
  //                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //               }
  //               // localStorage.key(i);
  //           }
  //       }
  //       console.log('created');
  //   },
    components : {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter,
    }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6
}
input {
  border-style: groove;
  width : 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
