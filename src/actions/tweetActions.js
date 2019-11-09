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
    axios.post(getUrl(), { text })
      .then(response => dispatch({ type: 'ADD_TWEET', payload: { id: response.data.name, text } }))
      .catch(err => console.err(err));
  }
}

export function updateTweet(text, id) {
  return { type: 'UPDATE_TWEET', payload: { id, text } }
}

export function deleteTweet(id) {
  return function (dispatch) {console.log(8889,getUrl(id))
    axios.delete(getUrl(id))
    .then(response => dispatch({ type: 'DELETE_TWEET', payload: id }))
    .catch(err => console.err(err));
  }
}