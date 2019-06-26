import { registerType } from "../actions/types";
import { toast } from 'react-toastify';
import axios from "axios";
import { userUrls } from '../../redux/actions/Urls';

export const registerAction = (signupData) => dispatch => {
  axios({
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    url: userUrls.REGISTER_URL,
    data: signupData,
  })
    .then(response => {
      toast.success('Successfully Registered your account', 'success', 4000);
      dispatch({
        type: registerType.SIGNUP_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error('No user with that email or password', 'error', 4000);
      dispatch({
        type: registerType.SIGNUP_ERROR,
        payload: error.response.data.errors
      });
    });
};
