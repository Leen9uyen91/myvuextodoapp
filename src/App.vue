<template>
   <div id="app">
      <NavBar />
      <TodosBox />
      <StatusBar />
   </div>
</template>

<script>
import TodosBox from './components/Todos.vue'
import NavBar from './components/NavBar.vue'
import StatusBar from './components/Statusbar.vue'

export default {
  name: 'App',
  components: {
    TodosBox,
    NavBar,
    StatusBar
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  background: #f4f4f4;
  padding: 10px;
}
</style>
