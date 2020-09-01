import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFhdiYIvn7jCcerNJJ5Vm_wOAWJpGxxFE",
    authDomain: "login-b3dc4.firebaseapp.com",
    databaseURL: "https://login-b3dc4.firebaseio.com",
    projectId: "login-b3dc4",
    storageBucket: "login-b3dc4.appspot.com",
    messagingSenderId: "294969362967",
    appId: "1:294969362967:web:f5be3849e953ddb26d2a52",
    measurementId: "G-03FWZKCWJG"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;