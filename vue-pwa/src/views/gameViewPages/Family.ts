import GameCard from '@/components/GameCard.vue';
import { localQuestions, onlineQuestions } from '@/questions/GetQuestions';


export default {
  name: 'family',
  components: {
    GameCard
  },
  created(this: any){
    console.log(onlineQuestions("familyQuestions"))
  }
}
