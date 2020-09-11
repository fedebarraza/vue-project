import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEye,
  faTrash,
  faSearch,
  faPlusSquare,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEye, faSearch, faPlusSquare, faAddressBook);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
