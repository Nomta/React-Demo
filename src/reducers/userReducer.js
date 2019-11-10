const initialState = {
  user: { id: null, name: null, image: null },
  fetching: false, 
  fetched: false, 
  error: null
}

const reducer = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, fetching: true }
    case 'FETCH_USER_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_USER_FULFILLED':
      return { ...state, fetching: false, fetched: true, user: action.payload }
    case 'SET_USER_NAME':
      return { ...state, user: { ...state.user, name: action.payload } }
      case 'SET_USER_IMAGE':
        return { ...state, user: { ...state.user, image: action.payload } }
    default: return state;
  }
}

export default reducer;