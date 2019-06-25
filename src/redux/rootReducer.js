import { combineReducers } from 'redux';
import registerReducer from "../redux/reducers/registerReducer";

export default combineReducers({
  register: registerReducer
});
