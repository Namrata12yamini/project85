import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA0BaqigrsrWDLuprcftqPm-Pn0iVAxyvw",
  authDomain: "e-ride-game-decfe.firebaseapp.com",
  projectId: "e-ride-game-decfe",
  storageBucket: "e-ride-game-decfe.appspot.com",
  messagingSenderId: "253948150735",
  appId: "1:253948150735:web:6061e22c1d20830e7988ba"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
