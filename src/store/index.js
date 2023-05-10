import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [],
            // { id: uuidv4(), title: 'Việc 1', completed: false },
            // { id: uuidv4(), title: 'Việc 2', completed: true },
            // { id: uuidv4(), title: 'Việc 3', completed: true }        
        auth: {
            isAuthenticated: true
        }
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed)
    },
    actions: {
        async deleteTodo ({commit}, todoId) {
           try {
               await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
               commit('DELETE_TODO', todoId)
           } catch (error) {
               console.log(error)
           }
        },
        async addTodo({commit}, newTodo) {
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
                commit('ADD_TODO', newTodo)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodos({commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                commit('SET_TODOS', response.data)        
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if(todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        SET_TODOS(state, todos) {
            state.todos = todos
        }
       
    }
}

const store = new Vuex.Store(storeData)

export default store