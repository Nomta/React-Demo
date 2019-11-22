const initialState = {
  user: { id: null, name: null, image: null },
  prevUser: { id: null, name: null, image: null },
  fetching: false,
  error: null,
  errorRead: false
}

const reducer = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, fetching: true }
    case 'FETCH_USER_REJECTED':
      return { ...state, fetching: false, error: action.payload, errorRead: false }
    case 'FETCH_USER_FULFILLED':
      return { ...state, fetching: false, user: action.payload }
    case 'SET_USER_NAME':
      return { ...state, fetching: true, prevUser: state.user, user: { ...state.user, name: '' } }
    case 'SET_USER_NAME_REJECTED':
      return { ...state, user: state.prevUser, fetching: false, error: action.payload, errorRead: false }
    case 'SET_USER_NAME_FULFILLED':
      return { ...state, fetching: false, user: { ...state.user, name: action.payload } }
    case 'SET_USER_IMAGE':
      return { ...state, user: { ...state.user, image: action.payload } }
    case 'SET_USER_ERROR_STATUS_READ':
      return { ...state, errorRead: true }
  default: return state;
  }
}

export default reducer;