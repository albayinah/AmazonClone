import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBc6cZseEDKaqSkfjjaKDBjHwbEWVX_7G0",
  authDomain: "clone-dd9c1.firebaseapp.com",
  projectId: "clone-dd9c1",
  storageBucket: "clone-dd9c1.appspot.com",
  messagingSenderId: "268905338009",
  appId: "1:268905338009:web:6d9ff5730db68e65809408",
  measurementId: "G-TN3D3N6SP2"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

