import db from '@/network/firebase/FirebaseInit'
import baseQuestions from '@/questions/BaseQuestions.json';

// Gel local questions from codebase
export function localQuestions() {
  return baseQuestions;
}

// Get locally stored questios

export function storedQuestions() {
  console.log('Locally stored questions');
}

// Get online questions

export function onlineQuestions(database : string) {
  const questionsArray: any = []
  db.collection(database).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let question = {
          id : doc.id,
          categorys : doc.data().categorys,
          header : doc.data().header,
          body : doc.data().body,
          followupQuestion : doc.data().followupQuestion
        }
        questionsArray.push(question)
      })
  })
  return questionsArray
}
