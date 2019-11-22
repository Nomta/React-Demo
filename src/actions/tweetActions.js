import axios from "axios";

const getUrl = function (id = '') {
  return `https://react-demo-43a1b.firebaseio.com/tweets/${id}.json`
}

export function fetchTweets() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_TWEETS' });

    axios.get(getUrl())
      .then(response => {
        const tweets = Object.keys(response.data).map(key => ({ id: key, text: response.data[key].text }))
        dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: tweets })
      })
      .catch(err => dispatch({ type: 'FETCH_TWEETS_REJECTED', payload: err }));
  }
}

export function addTweet(text) {
  return function (dispatch) {
    dispatch({ type: 'ADD_TWEET' });

    axios.post(getUrl(), { text })
      .then(response => dispatch({ type: 'ADD_TWEET_FULFILLED', payload: { id: response.data.name, text } }))
      .catch(err => dispatch({ type: 'ADD_TWEET_REJECTED', payload: err }));
  }
}

export function updateTweet(text, id) {
  return function (dispatch) {
    dispatch({ type: 'UPDATE_TWEET', payload: {text, id} });

    axios.put(getUrl(id), { text })
    .then(response => dispatch({ type: 'UPDATE_TWEET_FULFILLED', payload: {text, id} }))
    .catch(err => dispatch({ type: 'UPDATE_TWEET_REJECTED', payload: err }));
  }
}

export function deleteTweet(id) {
  return function (dispatch) {
    dispatch({ type: 'DELETE_TWEET' });

    axios.delete(getUrl(id))
    .then(response => dispatch({ type: 'DELETE_TWEET_FULFILLED', payload: id }))
    .catch(err => dispatch({ type: 'DELETE_TWEET_REJECTED', payload: err }));
  }
}

export function setErrorReadStatus() {
  return { type: 'SET_TWEET_ERROR_STATUS_READ' }
}