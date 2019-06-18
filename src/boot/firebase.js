import firebase from 'firebase/app' // Required
// Import as you need
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/messaging'

export default async ({ Vue }) => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDJRde4RwXCvoL6ElYWrkCTR9a6pmsj_Rg',
    authDomain: 'quasar-dd851.firebaseapp.com',
    databaseURL: 'https://quasar-dd851.firebaseio.com',
    projectId: 'quasar-dd851',
    storageBucket: 'quasar-dd851.appspot.com',
    messagingSenderId: '1060539430309'
  })

  const messaging = firebase.messaging()

  messaging.usePublicVapidKey('BPgG1VhfoaYJA5AFghneu5CdGARcIhilrXTa1vHjdzE_1cZkOKsjg-JmA3Bv2XR0EimMYPk8Hoq8yKWUJT1pG58')

  messaging.onTokenRefresh(() => {
    messaging.getToken().then(token => {
      // TODO: refactor notifications to vuex store, then sent token to server also here
    })
  })

  messaging.onMessage(payload => {
    console.log('Message received.', payload)
  })

  Vue.prototype.$firebase = firebase
}
