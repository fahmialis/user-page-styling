import axios from 'axios'
const baseURL = 'https://randomuser.me/api/?page=1&results=10&seed=Mandaya'

export function setUsers( payload ) {
  return { type: 'user/setUsers', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function getUsers() {
  return (dispatch) => {
    axios({
      url: baseURL, 
      method: 'GET'
    })
    .then(({data})=> {
      dispatch(setLoading(true))
      dispatch(setUsers(data.results))
    })
    .catch(err => {
      console.log(err);
    })
    .finally(_ => {
      dispatch(setLoading(false))
    })
  }
}