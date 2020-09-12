import Vue from "vue";
import MainApp from "./MainApp.vue";

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
  render: h => h(MainApp)
}).$mount("#app");
