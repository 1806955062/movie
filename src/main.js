import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import ElementUi from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//以上两步是将elementUi的js和css引入，但是js组件并没有由vue来管理

//将ElementUi组件注册到Vue中
Vue.use(ElementUi);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
