import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "./store/axios";

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
        let data = JSON.parse(localStorage.getItem('data'));
        updateToken(currentToken,data.tokenId)
        // Send the token to your server and update the UI if necessary
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


  async function updateToken(currentToken,tokenId) {
    try {
      await axios.post(`/webtoken-employe/${tokenId}`,{fcm_token:currentToken}).then((respone)=>{console.log(respone.data);}).catch((error)=>console.log(error));
      // Pembaruan token berhasil
    } catch (error) {
      // Penanganan kesalahan jika pembaruan token gagal
      console.log(error);
    }
  }
export { app, messaging };