import axios from "axios";

export function fetchUser() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_USER' });

    axios.get("http://rest.learncode.academy/api/reacttest/user")
      .then(response => dispatch({
        type: 'FETCH_USER_FULFILLED', 
        payload: response.data.length ? response.data[response.data.length - 1] : response.data 
      }))
      .catch(err => dispatch({ type: 'FETCH_USER_REJECTED', payload: err }));
  }
}

export function setUserName(name) {
  return { type: 'SET_USER_NAME', payload: name, }
}