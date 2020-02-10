import GameCard from '@/components/GameCard.vue';
import { localQuestions, onlineQuestions } from '@/questions/GetQuestions';
import { checkConnection } from '@/network/CheckConnection';

export default {
  name: 'teens',
  data: () => ({
    questions: []
  }),
  components: {
    GameCard
  },
  methods: {

  },
  async created(this: any){
    if (checkConnection()) {
      this.questions.push(await onlineQuestions("teensQuestions"))
    }
    this.questions.push(localQuestions().teens.questions)
  }
}
