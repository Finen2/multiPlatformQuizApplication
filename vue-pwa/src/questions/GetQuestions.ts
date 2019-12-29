import db from '@/network/firebase/FirebaseInit'
//import firebase from 'firebase';
// Get questions from

// Gel local questions

import baseQuestions from '@/questions/BaseQuestions.json';

export function localQuestions() {
  return baseQuestions;
}

// Get locally stored questios

export function storedQuestions() {
  console.log('Locally stored questions');
}

// Get online questions

export function onlineQuestionsKids() {
  console.log('Online questions');
  db.collection("kidsQuestions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        // let question = {
        //   id : doc.id,
        //   body : doc.
        // }
      })
  })
  // getWatches(){
  //   const watchesArray = []
  //   db.collection("watches").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       let watch = {
  //         id: doc.id,
  //         data: doc.data(),
  //         img: firebase.storage().ref().child('watches/' + doc.id).getDownloadURL().then((url) => {
  //           return url
  //         }).catch((error) => {
  //           return error
  //         })
  //       };
  //       watchesArray.push(watch)
  //     });
  //   });
  //   Watches.watchList = watchesArray
  // }
}

export function onlineQuestionsTeens() {
  console.log('Online questions');
}

export function onlineQuestionsAdults() {
  console.log('Online questions');
}

export function onlineQuestionsFamily() {
  console.log('Online questions');
}

export function onlineQuestionsSpecial() {
  console.log('Online questions');
}
