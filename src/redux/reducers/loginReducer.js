import { loginType } from '../actions/types';

const initialState = {
  login: {}
};

export default function (state = initialState, action) {
  switch (action) {
  case loginType.LOGIN_SUCCESS:
    return { ...state,
      login: action.payload,
    };
  case loginType.LOGIN_FAIL:
    return { ...state,
      login_errors: payload.response
    };
  default:
    return state;
  }
}
