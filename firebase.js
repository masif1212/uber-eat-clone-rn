import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDijMIijbvIpTYXDd-NfHX7nrmzCGR2DOs",
    authDomain: "uber-eats-rest-rn.firebaseapp.com",
    projectId: "uber-eats-rest-rn",
    storageBucket: "uber-eats-rest-rn.appspot.com",
    messagingSenderId: "389042321033",
    appId: "1:389042321033:web:7b349a4a6f7cf11623f858"
  };

//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;