<template>
   <div class="todo-list">
      <TodoForm />
      <ul v-if="auth.isAuthenticated">
        <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : ''">
            {{ todo.title }}            
            <input type="checkbox" :checked="todo.completed" @change="MARK_COMPLETE(todo.id)">
            <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <p v-else style="text-align:center">Not authorised</p>
   </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import TodoForm  from './TodoForm.vue'

export default {
   name: 'TodosBox', 
   components: { TodoForm },
   computed: mapState(['todos','auth']),
   created() {
      this.getTodos()
   },
   methods: {
    ...mapMutations(['MARK_COMPLETE']),
    //  deleteTodo(todoId) {
    //     this.$store.dispatch('deleteTodo', todoId)
    //  }
    ...mapActions(['deleteTodo', 'getTodos'])
  }
}
</script>

<style>
.todo-list ul {
    margin: 0;
    padding: 0;
}

.todo-list ul li {
    list-style: none;
    padding: 10px 15px;
    background: #d0d0d0;
    margin-bottom: 10px;
    font-size: 14px;
}

.todo-list ul li.completed {
    background: rgb(119, 218, 243);
}

.todo-list ul li input[type='checkbox'] {
    transform: scale(2);
    padding: 10px;
    float: right;
}

.todo-list ul li button {
    float: right;
    margin-right: 10px;
}

</style>