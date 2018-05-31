import {bookMockConstant} from '../constants';

export default {
  [bookMockConstant.SEARCH]: (state) => {
    console.log('bookMockStore getBooks');
    return state.mockBooks;
  }
}
