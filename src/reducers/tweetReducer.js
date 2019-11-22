const initialState = {
  tweets: [], fetching: false, error: null, errorRead: false
}

const reducer = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_TWEETS': 
      return { ...state, fetching: true }
    case 'FETCH_TWEETS_REJECTED': 
      return { ...state, fetching: false, error: action.payload, errorRead: false }
    case 'FETCH_TWEETS_FULFILLED': 
      return { ...state, fetching: false, tweets: action.payload }
    case 'ADD_TWEET':
      return { ...state, fetching: true }
    case 'ADD_TWEET_REJECTED': 
      return { ...state, fetching: false, error: action.payload, errorRead: false }
    case 'ADD_TWEET_FULFILLED': 
      return { ...state, tweets: [ ...state.tweets, action.payload ], fetching: false }
    case 'UPDATE_TWEET': 
      return { ...state, fetching: true }
    case 'UPDATE_TWEET_REJECTED': 
      return { ...state, fetching: false, error: action.payload, errorRead: false }
    case 'UPDATE_TWEET_FULFILLED': {
      const tweets = state.tweets;
      const index = tweets.findIndex(tweet => tweet.id === action.payload.id);
      
      tweets[index] = action.payload;
      return { ...state, fetching: false, tweets }
    }
    case 'DELETE_TWEET': 
      return { ...state, fetching: true }
    case 'DELETE_TWEET_REJECTED': 
      return { ...state, fetching: false, error: action.payload, errorRead: false }
    case 'DELETE_TWEET_FULFILLED': 
      return { ...state, tweets: state.tweets.filter(tweet => tweet.id !== action.payload), fetching: false }
    case 'SET_TWEET_ERROR_STATUS_READ':
      return { ...state, errorRead: true }
    default: return state;
  }
}

export default reducer;