import '../style.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
Vue.use(VueAxios,axios);

new Vue({
	store,
	router,
    render: h => h(App),
}).$mount('#app')
