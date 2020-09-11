import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faEye,
  faSearch,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEye, faSearch, faPlusSquare);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
