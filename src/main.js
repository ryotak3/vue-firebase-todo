// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.FIRE_BASE.apiKey,
  authDomain: process.env.FIRE_BASE.authDomain,
  databaseURL: process.env.FIRE_BASE.databaseURL,
  projectId: process.env.FIRE_BASE.projectId,
  storageBucket: process.env.FIRE_BASE.storageBucket,
  messagingSenderId: process.env.FIRE_BASE.messagingSenderId,
  appId: process.env.FIRE_BASE.appId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
