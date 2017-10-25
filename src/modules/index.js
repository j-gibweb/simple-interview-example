import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import post from './post'
import user from './user'

export default combineReducers({
  router: routerReducer,
  post,
  user
})
