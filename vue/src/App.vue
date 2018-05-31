<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <book/>
    <button @click="insertData">추가</button>
    <button @click="insertMockData">추가</button>
    <button @click="searchData">조회</button>
    <button @click="searchMockData">조회</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import Book from './components/Book'

  import {bookConstant, bookMockConstant} from './flux/constants'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    methods: {
      ...mapActions({
        insertData: bookConstant.CREATE,
        searchData: bookConstant.SEARCH,

        insertMockData: bookMockConstant.CREATE,
        searchMockData: bookMockConstant.SEARCH
      })
    },
    components: {
      Book
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
