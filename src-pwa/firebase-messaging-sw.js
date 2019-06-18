importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '1060539430309'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(async payload => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  return self.registration.showNotification(payload.title, payload);
});