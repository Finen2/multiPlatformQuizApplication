import firebase from 'firebase';
import 'firebase/firestore';
import FirebaseConfig from './FirebaseConfig';

const firebaseInit = firebase.initializeApp(FirebaseConfig);
//const analytics = firebase.analytics();
const db = firebaseInit.firestore();
export default db;


//Importtent to add roles on database who is allowed to do what to data. 
