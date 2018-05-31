import {bookMockConstant} from '../constants';
import axios from "axios/index";

export default {
  [bookMockConstant.CREATE]: (context, payload) => {
    console.log('bookMockStore insertData');
    const baseURI = 'http://localhost:8080/api';
    return axios.post(`${baseURI}/books`,
      {title: 'random', content: 'content'})
      .then((result) => {
        context.commit(bookMockConstant.CREATE, result)
      })
  },
  [bookMockConstant.SEARCH]: (context, payload) => {
    console.log('bookMockStore searchData');
    const baseURI = 'http://localhost:8080/api';
    return axios.get(`${baseURI}/books?size=20&sort=id,desc`)
      .then((result) => {
        context.commit(bookMockConstant.SEARCH, result.data)
      })
  }
}
