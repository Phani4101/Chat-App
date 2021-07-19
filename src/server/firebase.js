import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDyYZ-CU46AaS3qle3tiBYQxVlCjp0IH2w",
  authDomain: "chat-app-1725e.firebaseapp.com",
  databaseURL: "https://chat-app-1725e-default-rtdb.firebaseio.com",
  projectId: "chat-app-1725e",
  storageBucket: "chat-app-1725e.appspot.com",
  messagingSenderId: "1023401507523",
  appId: "1:1023401507523:web:2feca83fca83aca4994076",
  measurementId: "G-2YSDH059WM"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;