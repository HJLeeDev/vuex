import {bookConstant} from '../constants';
import axios from "axios/index";

export default {
  [bookConstant.CREATE]: (context, payload) => {
    console.log('bookStore insertData');
    const baseURI = 'http://localhost:8080/api';
    return axios.post(`${baseURI}/books`,
      {title: 'random', content: 'content'})
      .then((result) => {
        context.commit(bookConstant.CREATE, result)
      })
  },
  [bookConstant.SEARCH]: (context, payload) => {
    console.log('bookStore searchData');
    const baseURI = 'http://localhost:8080/api';
    return axios.get(`${baseURI}/books?size=20&sort=id,desc`)
      .then((result) => {
        context.commit(bookConstant.SEARCH, result.data)
      })
  }
}
