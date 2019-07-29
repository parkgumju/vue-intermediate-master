<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check"  v-bind:class="{checkBtnCompleted : todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted : todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props :['propsdata'],
    methods : {
        removeTodo (todoItem, index) {
            //this.$emit('removeTodoItem', todoItem, index);
            const plyload = {
                todoItem,
                index
            }
            this.$store.commit('removeOneItem', plyload);
        },
        toggleComplete (todoItem, index) {

            console.log(index);
            const todo = {
                todoItem,
                index
            }
            console.log(todoItem);
            this.$store.commit('toggleOneItem',todo)
            // this.$emit('toggleItem', todoItem, index)
        }
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
 /*아이템 트랜지션  효과 */
 
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
