import { combineReducers } from 'redux';
import registerReducer from "../redux/reducers/registerReducer";
import loginReducer from '../redux/reducers/loginReducer';

export default combineReducers({
  register: registerReducer,
  login: loginReducer
});
