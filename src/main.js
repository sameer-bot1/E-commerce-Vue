import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faHeart, faLocationDot, faMagnifyingGlass, faPhone, faShoppingCart, faStopwatch, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faFacebook,faInstagram,faTwitter,faLinkedin, faHeart,faMagnifyingGlass,faLocationDot,faEnvelope,faPhone,faStopwatch,faShoppingCart,faTrash)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router,bootstrap).use(store).mount('#app')
