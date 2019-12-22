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
      const myArray = this.question.kids
      this.shownQuestion = myArray.questions[Math.floor(Math.random() * myArray.questions.length)].body
    },
    async handleConnectivityChange(this: any, status: boolean){
      if (status === true) {
          this.question = await localQuestions()
          console.log(status)
      }else{
        this.question = await localQuestions()
        console.log(status)
      }
    }
  },
};
