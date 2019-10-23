import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from './router/index.js'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueApollo)

new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
