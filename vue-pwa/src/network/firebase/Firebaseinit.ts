import firebase from 'firebase';
import 'firebase/firestore';
import FirebaseConfig from './FirebaseConfig';

const firebaseInit = firebase.initializeApp(FirebaseConfig);
//const analytics = firebase.analytics();
const db = firebaseInit.firestore();
export default db;
