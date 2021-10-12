import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRunning, faWalking, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faRunning, faWalking, faCoffee);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');