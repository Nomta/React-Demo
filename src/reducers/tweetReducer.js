const initialState = {
  tweets: [], fetching: false, fetched: false, error: null
}

const reducer = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_TWEETS': 
      return { ...state, fetching: true }
    case 'FETCH_TWEETS_REJECTED': 
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_TWEETS_FULFILLED': 
      return { ...state, fetching: false, fetched: true, tweets: action.payload }
    case 'ADD_TWEET':
      return { ...state, tweets: [ ...state.tweets, action.payload ] }
    case 'UPDATE_TWEET': {
      const tweets = state.tweets;
      const index = tweets.findIndex(tweet => tweet.id === action.payload.id);
      
      tweets[index] = action.payload;
      return { ...state, tweets }
    }
    case 'DELETE_TWEET': 
      return { ...state, tweets: state.tweets.filter(tweet => tweet.id !== action.payload) }
    default: return state;
  }
}

export default reducer;