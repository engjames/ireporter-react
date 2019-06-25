import { registerType } from "../actions/types";

const initialState = {
  signupErrors: {},
  signupResponse: {
  }
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
  case registerType.SIGNUP_SUCCESS:
    return {
      ...state,
      signupErrors: {},
      signupResponse: action.payload
    };
  case registerType.SIGNUP_FAIL:
    return {
      ...state,
      signupResponse: {},
      signupErrors: action.payload
    };
  default:
    return state;
  }
};
