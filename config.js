import * as firebase from 'Firebase';;
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyB9yYLXxSHY7xiowsfnofEyG-HtmvM4B-Q",
    authDomain: "wireless-library-31bfc.firebaseapp.com",
    databaseURL: "https://wireless-library-31bfc.firebaseio.com",
    projectId: "wireless-library-31bfc",
    storageBucket: "wireless-library-31bfc.appspot.com",
    messagingSenderId: "1060315820835",
    appId: "1:1060315820835:web:ba649a8e51ebfe9f045296"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();