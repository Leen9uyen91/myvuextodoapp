<template>
    <div class="status-bar" v-if="auth.isAuthenticated">
        <h4 style="text-align:center">Done Task</h4>
        <ul class="done-task">
            <li v-for="todo in doneTodos" :key="todo.id">
                <input type="radio" checked>
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
   name: 'StatusBar',
   computed: {...mapGetters(['doneTodos']), ...mapState(['auth'])}
}
</script>

<style>
.done-task {
    padding: 0;
    margin: 0;
}
.done-task li {
    list-style: none;
    padding: 10px 15px;
    background: #00b44b;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
}
</style>