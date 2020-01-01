export default {
  name: 'gameCard',
  data: () => ({
    shownQuestion: '',
  }),
  props: {
    question: {}
  },
  methods: {
    nextQuestion(this: any) {
      // const myArray = this.question.kids;
      // this.shownQuestion = myArray.questions[Math.floor(Math.random() * myArray.questions.length)].body;
      console.log('Now the next question will be loaded')
    },
  },
}
