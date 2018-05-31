import Vuex from 'vuex'
import Vue from "vue";

import {bookState, bookMockState} from './states'
import {bookMutation, bookMockMutation} from './mutations'
import {bookAction, bookMockAction} from './actions'
import {bookGetter, bookMockGetter} from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    ...bookGetter, ...bookMockGetter
  },
  state: {
    ...bookState, ...bookMockState
  },
  mutations:{
    ...bookMutation, ...bookMockMutation
  },
  actions: {
    ...bookAction, ...bookMockAction
  }
});

export default store;
