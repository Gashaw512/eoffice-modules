
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// <font-awesome-icon icon="fa-solid fa-house-person-leave" />

import './index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas);

// import 'mdb-vue-ui-kit/css/mdb.min.css';

import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
