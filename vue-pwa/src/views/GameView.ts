import { localQuestions } from '@/questions/GetQuestions';
import offline from 'v-offline';

export default {
  name: 'gameView',
  data: () => ({
    question: {},
    shownQuestion: ''
  }),
  components: {
    offline
  },
  methods: {
    nextQuestion(this: any){
      this.shownQuestion = this.question.kids.questions[Math.floor(Math.random() * this.question.kids.questions.length)].body
    },
    handleConnectivityChange(this: any, status: any){
      this.question = localQuestions()
      if (status === true) {
          console.log('This device is online')
      }else{
        console.log('this device is not online')
      }
    }
  },
};
