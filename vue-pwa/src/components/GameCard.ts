export default {
  name: 'gameCard',
  data: () => ({
    shownQuestion: '',
  }),
  props: {
    question: {},
    title: '',
    cardColor: '',
  },
  methods: {
    nextQuestion(this: any) {
      let questionArrayTeen = this.question[Math.floor(Math.random() * this.question.length)];
      this.shownQuestion = questionArrayTeen[Math.floor(Math.random() * questionArrayTeen.length)].body;
    },
  },
  // mounted(this: any){
  //   this.nextQuestion();
  // }
}
