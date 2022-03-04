import {GET_COUNTRY} from './action';

const initialState = {
  country: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {...state, country: action.payload};
    default:
      return state;
  }
}

export default userReducer;
