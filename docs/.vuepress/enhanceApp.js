import Vue from 'vue'
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css'
import './public/styles/index.scss'

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
    componentName.forEach((item, index) => {
      Vue.component(item, componentConfig[index].default || componentConfig[index])
    })
  }
}