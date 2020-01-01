import GameCard from '@/components/GameCard.vue';
import { localQuestions, onlineQuestions } from '@/questions/GetQuestions';


export default {
  name: 'allQuestions',
  components: {
    GameCard
  },
  created(this: any){
    console.log('needs to load all the questions')
  }
}
