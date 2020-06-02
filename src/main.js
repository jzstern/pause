import Vue from "vue";
import Pause from "./Pause.vue";
import VueCurrencyInput from "vue-currency-input";

Vue.use(VueCurrencyInput);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Pause),
}).$mount("#app");
