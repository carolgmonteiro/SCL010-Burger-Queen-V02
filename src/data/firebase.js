//codigo que conecta a firebase
import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDn4cgn-arq6lkiAYOviSeC3IJmU8WNhFk",
  authDomain: "burger-queen-4a800.firebaseapp.com",
  databaseURL: "https://burger-queen-4a800.firebaseio.com",
  projectId: "burger-queen-4a800",
  storageBucket: "burger-queen-4a800.appspot.com",
  messagingSenderId: "300644811053",
  appId: "1:300644811053:web:6a21982f42529972a913a4"
};

firebase.initializeApp(config);

export default firebase;

// //codigo que conecta a firebase
// import firebase from "firebase";
// import "firebase/firestore";

// const settings = { timestampsInSnapshots: true };

// // Your web app's Firebase configuration
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDn4cgn-arq6lkiAYOviSeC3IJmU8WNhFk",
//   authDomain: "burger-queen-4a800.firebaseapp.com",
//   databaseURL: "https://burger-queen-4a800.firebaseio.com",
//   projectId: "burger-queen-4a800",
//   storageBucket: "burger-queen-4a800.appspot.com",
//   messagingSenderId: "300644811053",
//   appId: "1:300644811053:web:6a21982f42529972a913a4"
// });

// const db = firebaseApp.firestore().settings(settings);

// export { db };