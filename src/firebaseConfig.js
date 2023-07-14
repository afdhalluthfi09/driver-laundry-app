import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// step 2: konfigurasi firebase
const firebaseConfig = {
    apiKey: "AIzaSyBapvnjLuZsmW0zCJcruFtCbbw672FJ8E4",
    authDomain: "e-laundry-driver.firebaseapp.com",
    projectId: "e-laundry-driver",
    storageBucket: "e-laundry-driver.appspot.com",
    messagingSenderId: "1079880687729",
    appId: "1:1079880687729:web:e01c7254a6b1e15bd6fbd0"
}

// step 3: implement
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // ...
  });

// step 4: pemeriksaan token dari project firebase dengan memanggil getToken()
getToken(messaging, {
    vapidKey: "BJ3K0Ed4igq-C44zKfCdvtnsIFylEf4rlVNQIUOVrMJtXRy9R3Zip7vXXUXkwuh3pxqRp8yxMAaW_DK-NVKBfl4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("token :", currentToken);
        // Send the token to your server and update the UI if necessary
        messaging
          .send({
            to: 'cf8LFotjBkwWT4pPKLT1hp:APA91bGAOvL48FvkAxe0KWGHp5GwhzutbCGwI0rIyCo9F0FOnkuPcWpa9KN6IPcKR5UrdSJV7WGqRLI5c5FUv8rhXr0SAS79v8YjbGrcgMjOzE6po065i0c_oGal0J1pE3kGhWnlzsGF',
            notification: {
              title: 'Notifikasi dari Vue.js',
              body: 'Ini adalah pesan notifikasi',
            },
          })
          .then((response) => {
            console.log('Notifikasi berhasil dikirim ke Laravel:', response);
          })
          .catch((error) => {
            console.log('Terjadi kesalahan saat mengirim notifikasi:', error);
          });
        // ...
      } else {
        // Show permission request UI
        console.log("No registration token available. Request permission to generate one.");
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });

export { app, messaging };