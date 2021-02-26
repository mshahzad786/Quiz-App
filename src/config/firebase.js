import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBgPXLZxkj1HGNPo7Iu1RhVhlQtrcoZGJA",
    authDomain: "web-and-mobile-90dcd.firebaseapp.com",
    projectId: "web-and-mobile-90dcd",
    storageBucket: "web-and-mobile-90dcd.appspot.com",
    messagingSenderId: "366367587426",
    appId: "1:366367587426:web:325e3d0baaf0a1686a253b",
    measurementId: "G-M33PX1WQJG"
  };
 
var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase
 