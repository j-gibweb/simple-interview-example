import { baseUrl } from '../globalConstants'

export const USERS = 'app/user/USERS'

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case USERS:
      return {
        ...state,
        users: action.users,
      }

    default:
      return state
  }
}

export const getUsers = () => {
  return dispatch => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())
    .then((res) => {
      dispatch({
        type: USERS,
        users: res
      })
    })
  }
}
