import Vue from "vue";
import VCalendar from 'v-calendar';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { worker } from "./mocks/browser"

Vue.config.productionTip = false;
worker.start()

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);
Vue.directive('click-outside', {
  bind: function (element, binding, vnode) {
    element.clickOutsideEvent = function (event) {  //  check that click was outside the el and his children
      if (!(element === event.target || element.contains(event.target) || binding.arg === event.target.id)) { // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
        // binding.value(); run the arg
      }
    };
    document.body.addEventListener('click', element.clickOutsideEvent)
  },
  unbind: function (element) {
    document.body.removeEventListener('click', element.clickOutsideEvent)
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
