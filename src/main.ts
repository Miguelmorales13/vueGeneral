import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import toastr from "toastr";
import "toastr/build/toastr.css";
import "./main.css"

Vue.config.productionTip = false

toastr.options = {
  closeButton: true,
  newestOnTop: false,
  progressBar: false,
  // positionClass: 'toast-top-right',
  positionClass: "toast-bottom-right",
  preventDuplicates: true,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 2000,
  extendedTimeOut: 1000,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "slideDown",
  toastClass:"toastrDone",
  hideMethod: "slideUp"
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
