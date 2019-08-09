const addOneItem = (state, todoItem) =>  {
    const obj = { completed: false, item: todoItem };
    // 저장 하는 로직 
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, todo) => {
    // todoItem.completed = !todoItem.completed;  //직접 적인 데이터를 조작 하는것 보단 todoItems 를 바꾸는게 좋다
    state.todoItems[todo.index].completed = !state.todoItems[todo.index].completed;
    // this.todoItems[index].completed = !this.todoItems[index].completed;
    // //로컬 스토리지의 데이터 갱신 update 기능이 없어서 지우고 넣는다.
    localStorage.removeItem(todo.todoItem.item)
    localStorage.setItem(todo.todoItem.item, JSON.stringify(todo.todoItem))
}
const clearOneItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}


export { addOneItem, removeOneItem, toggleOneItem, clearOneItem};