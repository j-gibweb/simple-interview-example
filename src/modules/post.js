import { baseUrl } from '../globalConstants'

export const POSTS = 'app/post/POSTS'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        posts: action.posts
      }

    default:
      return state
  }
}

export const getPosts = (userId) => {
  return dispatch => {
    fetch(`${baseUrl}/posts?userId=${userId}`)
    .then(res => res.json())
    .then((res) => {
      dispatch({
        type: POSTS,
        posts: res
      })
    })
  }
}
