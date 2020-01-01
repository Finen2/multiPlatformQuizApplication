import GameCard from '@/components/GameCard.vue';
import { localQuestions, onlineQuestions } from '@/questions/GetQuestions';


export default {
  name: 'special',
  components: {
    GameCard
  },
  created(this: any){
    console.log(onlineQuestions("specialQuestions"))
  }
}
