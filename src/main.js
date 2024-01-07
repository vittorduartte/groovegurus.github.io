import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHandHoldingHeart)
library.add(faCompass)

import 'animate.css';
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'

const app = createApp(App)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
