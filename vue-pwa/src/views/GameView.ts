export default {
  name: 'gameView',
  data: () => ({
    question: {},
    shownQuestion: '',
  }),
  methods: {
    nextQuestion(this: any) {
      const myArray = this.question.kids;
      this.shownQuestion = myArray.questions[Math.floor(Math.random() * myArray.questions.length)].body;
    },
  },

};
