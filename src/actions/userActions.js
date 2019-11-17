import axios from "axios";

const url = 'https://react-demo-43a1b.firebaseio.com/user.json'

export function fetchUser() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_USER' });

    axios.get(url)
      .then(response => dispatch({
        type: 'FETCH_USER_FULFILLED', 
        payload: response.data[Object.keys(response.data)[0]] 
      }))
      .catch(err => dispatch({ type: 'FETCH_USER_REJECTED', payload: err }));
  }
}

export function setUserName(name) {
  return function(dispatch) {
    dispatch({ type: 'SET_USER_NAME' });

    axios.delete(url).then(() => {
        axios.post(url, { name })
          .then(response => dispatch({ type: 'SET_USER_NAME_FULFILLED', payload: name, }))
        })
        .catch(err => dispatch({ type: 'SET_USER_NAME_REJECTED', payload: err }));
  }
}

export function setUserImage(image) {
  return { type: 'SET_USER_IMAGE', payload: image, }
}