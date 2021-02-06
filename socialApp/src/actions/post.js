import database from '@react-native-firebase/database';
import {cos} from 'react-native-reanimated';
import {ERROR_POST, SET_POST} from './action.types';

export const getPosts = () => async (dispatch) => {
  try {
    database()
      .ref('/posts/')
      .on('value', (snapshot) => {
        console.log('USER Data: ', snapshot.val());
        if (snapshot.val()) {
          dispatch({
            type: SET_POST,
            payload: Object.values(snapshot.val()),
          });
        } else {
          dispatch({
            type: SET_POST,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ERROR_POST,
    });
  }
};
