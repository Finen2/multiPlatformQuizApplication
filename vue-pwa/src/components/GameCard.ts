import { checkConnection } from '@/network/CheckConnection';
import offline from 'v-offline'; //Dosent work with route children

export default {
  name: 'gameCard',
  data: () => ({
    question: {},
    shownQuestion: '',
  }),
  components: {
    offline,
  },
  props: {
    questions: {}
  },
  methods: {
    nextQuestion(this: any) {
      const myArray = this.question.kids;
      this.shownQuestion = myArray.questions[Math.floor(Math.random() * myArray.questions.length)].body;
    },
    handleConnectivityChange(this: any, status: boolean) {
      if (status === true) {
        // Trigger parent function
      } else {
        // trigger parent function
      }
    },
  },
  created(this: any){
    this.handleConnectivityChange(checkConnection());
  }
}
