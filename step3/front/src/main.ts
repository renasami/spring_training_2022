import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'


loadFonts()

const app = createApp(App)
const vuetify = createVuetify() 
app.use(vuetify)
app.use(router)
app.mount("#app")