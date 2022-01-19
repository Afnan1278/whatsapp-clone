import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBXeEeq51SBPvWGZ6vz4j9IIPWV17-NyRg",
  authDomain: "whatsapp-b5219.firebaseapp.com",
  projectId: "whatsapp-b5219",
  storageBucket: "whatsapp-b5219.appspot.com",
  messagingSenderId: "781157152809",
  appId: "1:781157152809:web:a16c470330acceda900438"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
