import { localQuestions, onlineQuestionsKids } from '@/questions/GetQuestions';
import { checkConnection } from '@/network/CheckConnection';
//import offline from 'v-offline'; //Dosent work with route children

export default {
  name: 'gameView',
  data: () => ({
    question: {},
    shownQuestion: '',
  }),
  components: {
    //offline,
  },
  methods: {
    nextQuestion(this: any) {
      const myArray = this.question.kids;
      this.shownQuestion = myArray.questions[Math.floor(Math.random() * myArray.questions.length)].body;
    },
    handleConnectivityChange(this: any, status: boolean) {
      if (status === true) {
        this.question = localQuestions();
      } else {
        this.question = localQuestions();
      }
    },
  },
  created(this: any) {
    this.handleConnectivityChange(checkConnection());
    onlineQuestionsKids()
  },
};
