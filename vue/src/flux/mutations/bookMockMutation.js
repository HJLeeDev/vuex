import {bookMockConstant} from '../constants';

export default {
  [bookMockConstant.CREATE] : (state, payload) => {
    console.log("bookMockConstant create");
    if (payload.data !== "") {
      const idx = state.mockBooks.findIndex(book => book.id === payload.data.id);

      const book = payload.data;

      if (state.mockBooks.length > 0 && idx === -1) {
        state.mockBooks = [book, ...state.mockBooks]
      }
    }
  },
  [bookMockConstant.SEARCH] : (state, payload) => {
    console.log("bookMockConstant search");
    state.mockBooks = payload._embedded.books
  }
}
