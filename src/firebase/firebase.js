import firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics"


var firebaseConfig = {
    apiKey: "AIzaSyAK_IN2kduwALIP3ew6B7-Ndg51LOm9s0o",
    authDomain: "social-chat-846e8.firebaseapp.com",
    projectId: "social-chat-846e8",
    storageBucket: "social-chat-846e8.appspot.com",
    messagingSenderId: "769210250975",
    appId: "1:769210250975:web:cb4d822da836b362ecdb6a",
    measurementId: "G-CZCY6X2CTX"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;