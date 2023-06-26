<template>
  <div class="container-setting">
    <!-- header -->
    <HeaderComponent/>
    <!-- bar status -->
    <StatusComponent/>
    <!-- main -->
    <div class="main">
            <div class="main-title">
                <p>Layanan Driver</p>
            </div>
            <div class="contain-main">
                <div @click="openModal('profil')" id="openModalBtn" class="square-icon">
                    <img src="../assets/gambar/icon/profile.svg" alt="">
                    <p>Profil</p>
                </div>
                <div @click="openModal('password')" class="square-icon">
                    <img src="../assets/gambar/icon/password.svg" alt="">
                    <p>Password</p>
                </div>
                <div @click="openModal('help')" class="square-icon">
                    <img src="../assets/gambar/icon/help.svg" alt="">
                    <p>Bantuan</p>
                </div>
            </div>
    </div>
  </div>
  <transition name="modal">
    <div v-if="isModalOpen" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
          <h2>{{ popupTitle }}</h2>
          <form id="form" v-if="currentForm == 'profil'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" />
            </div>
            <div class="group-from">
              <label for="name">nama</label>
              <input
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div class="group-from">
              <label for="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div class="group-from">
              <label for="age">Umur</label>
              <input
                type="text"
                id="age"
                name="age"
              />
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Ubah</button>
              </div>
            </div>
          </form>
          <form id="form" v-if="currentForm == 'password'">
            <div class="group-from">
              <label for="current_password">password lama</label>
              <input
                type="text"
                id="current_password"
                name="current_password"
              />
            </div>
            <div class="group-from">
              <label for="new_password">password Baru</label>
              <input
                type="text"
                id="new_password"
                name="new_password"
              />
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Ubah</button>
              </div>
            </div>
          </form>
          <form id="form" v-if="currentForm == 'help'">
            <div class="group-from">
              <label for="current_password">Layanan</label>
              <p>Saat ini Pelayan bisa melalui dari kami dengan cara menggubungi no berikiut : <stron>0811820083</stron></p>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Bantuan</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  </transition>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import StatusComponent from '../components/Status.vue'
export default {
  name: "SettingViewComponent",
  created() {},
  data() {
    return {
      isModalOpen: false,
      currentForm: '',
      popupTitle: '',
    };
  },
  components:{HeaderComponent,StatusComponent},
  props: {},
  methods: {
    openModal(formName) {
      this.currentForm = formName;
      this.isModalOpen = true;
      if(this.currentForm == 'profil'){
        this.popupTitle = 'profil';
          console.log('heheh')
      }else if( this.currentForm == 'password'){
        this.popupTitle = 'password';
        console.log('heeh')
      }else if( this.currentForm == 'help'){
        this.popupTitle = 'help';
        console.log('heoeh')
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>