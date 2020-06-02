import Vue from "vue";
import Pause from "./Pause.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Pause)
}).$mount("#app");