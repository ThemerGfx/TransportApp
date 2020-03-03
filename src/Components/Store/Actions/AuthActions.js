import firebase from 'firebase/app';
import 'firebase/auth'

export const signUp = (newUser) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    )
    .then(resp => {
      return firebase.firestore().collection('transporteurs').doc(resp.user.uid).set({
        firstname: newUser.firstName,
        lastname: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        phone: newUser.phone,
        email: newUser.email,
        password: newUser.password,
        uid: resp.user.uid
      });
    })
    .then(() => {
      dispatch({ 
        type: 'SIGNUP_SUCCESS',
        payload: { newUser } 
      })
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}