const initialState = {
  tweets: [], prevTweets: [], fetching: false, fetched: false, error: null
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
      return { ...state, prevTweets: state.tweets, fetching: true, tweets }
    }
    case 'UPDATE_TWEET_REJECTED': 
      return { ...state, tweets: state.prevTweets, fetching: false, error: action.payload }
    case 'UPDATE_TWEET_FULFILLED': 
      return { ...state, fetching: false, fetched: true }
    case 'DELETE_TWEET': 
      return { ...state, tweets: state.tweets.filter(tweet => tweet.id !== action.payload) }
    default: return state;
  }
}

export default reducer;