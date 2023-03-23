import { createStore } from "vuex";
import { ref, Ref } from "vue";

interface State {
  turn: number;
  val: string;
  pressed: number;
  blocks: Array<string>;
}

export default createStore<State>({
  state: {
    turn: ref(1).value,
    val: ref("X").value,
    pressed: ref(0).value,
    blocks: ref([]).value,
  },
  mutations: {},
  actions: {
    check: () => {
      console.log("check");
    },
  },
  getters: {},
  modules: {},
});
