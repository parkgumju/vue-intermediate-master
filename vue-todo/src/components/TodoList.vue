<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check"  v-bind:class="{checkBtnCompleted : todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted : todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            todoItems : []
        }
    },
    methods : {
        removeTodo : function (todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index , 1);
        },
        toggleComplete : function (todoItem, index) {
            // console.log(todoItem,index);
            // console.log(!todoItem.completed);
            console.log(todoItem);
            console.log(todoItem.item);
            todoItem.completed = !todoItem.completed; 
            //로컬 스토리지의 데이터 갱신 update 기능이 없어서 지우고 넣는다.
            localStorage.removeItem(todoItem.item)
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        }
    },
    created : function() {
        if(localStorage.length > 0){
            for (var i =0; i < localStorage.length; i++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server" ){
                    // this.todoItems.push(localStorage.key(i));
                     this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
                
                // localStorage.key(i);
            }
        }
        console.log('created');
    }
}
</script>

<style scoped>
 ul {
     list-style-type: none;
     padding-left: 0px;
     margin-top : 0px;
     text-align: left;
 }
 li {
     display: flex;
     min-height: 50px;
     height: 50px;
     line-height: 50px;
     margin : 0.5rem 0;
     padding : 0 0.9rem;
     background: white;
     border-radius : 5px;

 }
 .checkBtnCompleted {
     color : #b3adad;
 }
 .checkBtn {
     line-height: 45px;
     color : #62acde;
     margin-right: 5px;
 }
 .removeBtn {
     margin-left : auto;
     color : #de4343;
 }
 .textCompleted {
     text-decoration: line-through;
     color : #b3adad;
 }
</style>
