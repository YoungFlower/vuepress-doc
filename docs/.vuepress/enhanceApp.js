import Vue from 'vue'
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css'
// import loadingCom from '../components/loading-com.vue'
import {
  componentName,
  componentConfig
} from './components.js'
export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(Vant)
    Vue.component(componentName, componentConfig.default || componentConfig)
  }
}