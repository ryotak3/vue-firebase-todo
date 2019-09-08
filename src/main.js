// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCILj3t4A38qkrmM_mgtMvVYVJd-G-Psgo",
  authDomain: "todosample-ae3ab.firebaseapp.com",
  databaseURL: "https://todosample-ae3ab.firebaseio.com",
  projectId: "todosample-ae3ab",
  storageBucket: "",
  messagingSenderId: "267233218190",
  appId: "1:267233218190:web:501b0b3b06dfd0c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
