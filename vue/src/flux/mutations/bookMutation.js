import {bookConstant} from '../constants';

export default {
  [bookConstant.CREATE] : (state, payload) => {
    console.log("bookConstant create");
    if (payload.data !== "") {
      const idx = state.books.findIndex(book => book.id === payload.data.id);

      const book = payload.data;

      if (state.books.length > 0 && idx === -1) {
        state.books = [book, ...state.books]
      }
    }
  },
  [bookConstant.SEARCH] : (state, payload) => {
    console.log("bookConstant search");
    state.books = payload._embedded.books
  }
}
