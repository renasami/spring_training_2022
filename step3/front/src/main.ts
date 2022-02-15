/* eslint-disable */
//PrimeVueやvue本体など使うライブラリ等をimport
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { loadFonts } from './plugins/webfontloader'

//自作で定義したルーターをimport
import router from './router'


//PrimeVueから使いたいcomponentをimoprt
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


//↓primevueのテーマを適用
import "primevue/resources/themes/saga-green/theme.css" // テーマ
import "primevue/resources/primevue.min.css" // ベース
import "primeicons/primeicons.css" // アイコン
import "primeflex/primeflex.css" // primeflex

// 日本語化
import ja from "./config/ja"

//vueのフォントをdl
loadFonts()


const app = createApp(App)

//ここで日本語化とPrimeVueの適用をしてます
app.use(PrimeVue, {local:ja})
app.use(router)

//componentの登録
app.component("InputText",InputText)
app.component("Button",Button)

//#appにvueのアプリケーションをマウント
app.mount("#app")