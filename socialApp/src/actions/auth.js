import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';
import Home from '../screens/Home';

export const signUp = (data) => async (dispatch) => {
  const {name, instaUserName, bio, email, password, country, image} = data;
  console.log(data);

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((signUpdata) => {
      console.log(signUpdata);
      console.log('User created');

      database()
        .ref('/users/' + signUpdata.user.uid)
        .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: signUpdata.user.uid,
        })
        .then(() => console.log('Dataset done'));
      Snackbar.show({
        text: 'Account Created',
        textColor: 'white',
        backgroundColor: '#1b262c',
      });
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: `SignUp Error ${error}`,
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signIn = (data) => async (dispatch) => {
  console.log(data);
  const {email, password} = data;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('SignIn Success');
      Snackbar.show({
        text: 'SignIn Success',
        textColor: 'white',
        backgroundColor: '#1b262c',
      });
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: 'SignIn Failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      Snackbar.show({
        text: 'SignOut Success',
        textColor: 'white',
        backgroundColor: '#1b262c',
      });
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: 'SignOut Failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
