import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import messaging from './firebaseConfig.js'
import router from './router'
import store from './store'


createApp(App)
          .use(store)
          .use(router)
          .use(messaging)
          .mount('#app')
window.addEventListener('popstate', () => {
    const confirmationMessage = 'Apakah Anda yakin ingin keluar?';
    if (confirm(confirmationMessage)) {
      navigator.app.exitApp(); // Menutup aplikasi PWA pada perangkat seluler
    } else {
      history.pushState(null, null, window.location.href); // Mengembalikan ke halaman sebelumnya
    }
  });
  