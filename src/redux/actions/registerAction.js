import { registerType } from "../actions/types";
import axios from "axios";
import { userUrls } from '../../redux/actions/Urls';

export const registerAction = (signupData) => dispatch => {
  const { lastname, firstname, email, password } = signupData;

  return axios.post(userUrls.REGISTER_URL,
    {
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }
    })
    .then(response => {
      dispatch({
        type: registerType.SIGNUP_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: signupType.SIGNUP_ERROR,
        payload: error.response.data.errors
      });
    });
};
