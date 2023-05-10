<template>
   <form @submit="onSubmit">
      <input type="text" v-model="title">
      <input type="submit" value="Add">
   </form>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid'

export default {
   name: 'TodoForm',
   data() {
    return {
        title: ''
    }
   },
   methods: {...mapActions(['addTodo']),
    onSubmit(event) {
        event.preventDefault();
        // console.log(this.title)
        if (this.title === '') {
            return
        } else {
            this.addTodo({
            id: uuidv4(),
            title: this.title,
            completed: false
          })
        }
        this.title =''

    }
   }
}
</script>

<style>
.todo-list form input[type="text"] {
    flex: 10;
    border: 1px solid #3333;
    border-radius: 0;
    padding-left: 10px;
}

.todo-list form {
    display: flex;
    margin-bottom: 10px;
}

.todo-list form input[type="submit"] {
    flex: 2;
    height: 30px;
    border: none;
    background: #ff0000;
    color: #fff;
}

</style>