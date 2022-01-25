import {CHANGE_SEARCH_FIELD} from './Constants'
// import { object } from 'prop-types';

const initialState = {
    searchField: ''
}

export const searchSuperHeroes = (state = initialState, action = {}) => {
    console.log(action.type)
    switch(action.type) {
      case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}