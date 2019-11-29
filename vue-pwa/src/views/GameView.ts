import { localQuestions } from '@/questions/GetQuestions'

export default {
  name: 'gameView',
  data: () => ({
    question: {}
  }),
  created(this: any) {
    this.question = localQuestions()
    console.log(this.question)
  }
};
