import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n);
import demoZh from "@/config/lang/demo/demoZh";
import demoEn from "@/config/lang/demo/demoEn";

import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui英文包
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui中文包

import locale from 'element-ui/lib/locale' // 引入elementuiui语言包模块


Vue.config.lang = 'en';
let zh = Object.assign(demoZh.commen);
let en = Object.assign(demoEn.commen,);
Vue.config.lang = 'en'
const i18n = new Vuei18n({
    locale: localStorage.getItem('lang') || 'en', // 语言
    messages: {  // 文案
        zh: {
            ...zh,
            ...elementZhLocale
        }, // 文案的中文版
        en: {
            ...en,
            ...elementEnLocale
        } // 文案的英文版
    },
    silentTranslationWarn: true
});



locale.i18n((key, value) => i18n.t(key, value))
export default i18n
