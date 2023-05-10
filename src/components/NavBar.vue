<template>
   <div class="navbar">
      <h1>My Vuex App Todos</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li v-if="auth.isAuthenticated">
            Total todos: {{ todos.length }}
            <button @click="TOGGLE_AUTH">Logout</button>
        </li>
        <button v-else @click="TOGGLE_AUTH">Login</button>
      </ul>
   </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'NavBar',
    computed: mapState(['todos','auth']),
    methods: mapMutations(['TOGGLE_AUTH'])
}
</script>

<style>
.navbar ul {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.navbar ul li {
    display: inline-block;

}

.navbar h1 {
    margin: 10px 0;
    text-align: center;
}
</style>