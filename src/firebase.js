import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCCFkJSu_pjAbenDcXgkByQIMt8gbeqIh0",
  authDomain: "react-food-order-app-ef0b7.firebaseapp.com",
  databaseURL: "https://react-food-order-app-ef0b7-default-rtdb.firebaseio.com",
  projectId: "react-food-order-app-ef0b7",
  storageBucket: "react-food-order-app-ef0b7.appspot.com",
  messagingSenderId: "1073520160079",
  appId: "1:1073520160079:web:b4b6788522767b54db293a",
  measurementId: "G-RJ7T3SBQZR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export{db,auth,storage}
