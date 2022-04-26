import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia, PiniaVuePlugin} from 'pinia';
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'
// import axios from 'axios';

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin);
Vue.use(vuetify);
Vue.use(Vuelidate);
const pinia = createPinia();

new Vue({
  el: '#app',
 pinia,
 router,
 vuetify,
 components: {App},
 template: '<App/>',
 render: h => h(App)
}).$mount('#app')
