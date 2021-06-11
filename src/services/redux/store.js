import {createStore} from 'redux';

const initialState = {
  loading: false,
  user: {
    id: '',
    email: '',
    name: '',
    status: '',
    token: '',
    refreshToken: '',
  },
  recommendation: {},
  alumni: {},
  seen: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_PROFILE') {
    return {
      ...state,
      user: action.value,
    };
  } else if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      user: {
        ...state.user,
        token: action.value,
      },
    };
  } else if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  } else if (action.type === 'SET_ALUMNI') {
    return {
      ...state,
      alumni: action.value,
    };
  } else if (action.type === 'SET_SEEN') {
    return {
      ...state,
      seen: action.value,
    };
  } else if (action.type === 'SET_RECOMMENDATION') {
    return {
      ...state,
      recommendation: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
