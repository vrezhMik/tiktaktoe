import { createStore } from "vuex";
import { ref } from "vue";

interface State {
  turn: number;
  val: string;
  pressed: number;
  blocks: Array<string>;
  checkBlocks: Array<Array<string>>;
  gameMode: boolean;
  userWon: number;
  opponentWon: number;
  tie: number;
}

export default createStore<State>({
  state: {
    turn: ref(0).value,
    val: ref("X").value,
    pressed: ref(0).value,
    blocks: ref([]).value,
    checkBlocks: ref([[], [], []]).value,
    gameMode: ref(true).value,
    userWon: ref(0).value,
    opponentWon: ref(0).value,
    tie: ref(0).value,
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});
