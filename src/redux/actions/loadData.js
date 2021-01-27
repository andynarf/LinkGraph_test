// fetch('')
// .then(response => response.json())
// .then(data => console.log(data));
import axios from 'axios';
import {DATA_LOADED, DATA_ERROR} from './types'


export const loadData = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({
        type: DATA_LOADED,
        payload: res.data,
      });

  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};