import { createStore } from "vuex";
import { ref, Ref } from "vue";

interface State {
  turn: number;
  val: string;
  pressed: number;
  blocks: Array<string>;
  checkBlocks: Array<Array<string>>;
  gameMode: boolean;
}

export default createStore<State>({
  state: {
    turn: ref(0).value,
    val: ref("X").value,
    pressed: ref(0).value,
    blocks: ref([]).value,
    checkBlocks: ref([[], [], []]).value,
    gameMode: ref(true).value,
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});
