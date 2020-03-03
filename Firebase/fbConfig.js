import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBBp0N3R-33qg5GIAkoDfTFkgZMLE7VKoY",
  authDomain: "transapp-9b8cb.firebaseapp.com",
  databaseURL: "https://transapp-9b8cb.firebaseio.com",
  projectId: "transapp-9b8cb",
  storageBucket: "transapp-9b8cb.appspot.com",
  messagingSenderId: "114920058396",
  appId: "1:114920058396:web:32002c002d7b0de44cb9d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
const storage = firebase.storage();

export {
    storage, firebase as default
}