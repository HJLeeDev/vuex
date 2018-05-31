import {bookConstant} from '../constants';

export default {
  [bookConstant.SEARCH]: (state) => {
    console.log('bookStore getBooks');
    return state.books;
  }
}
