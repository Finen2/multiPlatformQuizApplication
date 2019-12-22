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
      console.log(status)
      this.question = localQuestions()
      console.log(this.question)
      // add if statment that takes status and adds online questions to expand functionality
    }
  },
};
