// step 7: setting notifikasi di service worker tapi dengan metode namespaced ada di doumentasi https://firebase.google.com/docs/cloud-messaging/js/receive?hl=id#web-namespaced-api_2
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyC3exjydwPaTCwTIqX6zOxnmDNaB-JEcII",
    authDomain: "e-laundry-client.firebaseapp.com",
    projectId: "e-laundry-client",
    storageBucket: "e-laundry-client.appspot.com",
    messagingSenderId: "547200687551",
    appId: "1:547200687551:web:5c04a31dc406b3af67550a"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });