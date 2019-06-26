import { toast } from 'react-toastify';
import axios from 'axios';
import { loginType } from './types';
import { userUrls } from '../../redux/actions/Urls';


export const loginAction = (userData, props) => dispatch => {
  axios({
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    url: userUrls.LOGIN_URL,
    data: userData,
  }).then(response => {
    toast.success('Logged In Successfully', 'success', 10000);
    localStorage.setItem("user_token", response.data.data[0]['token']);
    dispatch({
      type: loginType.LOGIN_SUCCESS,
      payload: response.data
    });
    props.history.push('/');
    // document.location.href = '/';
  })
    .catch(error => {
      console.log('Failed')
      toast.error('No user with that email or password', 'error', 10);
      dispatch({
        type: loginType.LOGIN_FAIL,
        payload: error
      });
    });
};

