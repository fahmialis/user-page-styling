import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  users: [],
  user: [],
  loading: false
}

function reducer( state = initialState, action ) {
  const { type, payload } = action
  if(type === 'user/setUsers') {
    return { ...state, users: payload}
  } else if (type === 'loading/setLoading') {
    return { ...state, loading: payload}
  }
 
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store