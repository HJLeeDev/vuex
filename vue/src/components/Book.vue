<template>
  <div>
    <ul v-if="books !== null">
      <li v-for="book in books">{{ book.id}} {{ book.title }} {{ book.content }}</li>
    </ul>
    <ul v-if="mockBooks !== null">
      <li v-for="book in mockBooks">{{ book.id}} {{ book.title }} {{ book.content }}</li>
    </ul>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'
  import {bookConstant, bookMockConstant} from '../flux/constants'

  export default {
    name: 'count',
    computed: {
      ... mapGetters({
        books: bookConstant.SEARCH,
        mockBooks: bookMockConstant.SEARCH
      })
    }
  }
</script>

<style scoped>
  li {
    display: block;
  }
</style>
