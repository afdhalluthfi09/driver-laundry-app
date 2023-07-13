<template>
    <div class="main">
            <div class="main-title">
                <p>Layanan Driver</p>
            </div>
            <div class="contain-main">
                <div @click="openModal('profil')" id="openModalBtn" class="square-icon">
                    <img src="../../../assets/gambar/icon/profile.svg" alt="">
                    <p>Profil</p>
                </div>
                <div @click="openModal('password')" class="square-icon">
                    <img src="../../../assets/gambar/icon/password.svg" alt="">
                    <p>Password</p>
                </div>
                <div @click="openModal('help')" class="square-icon">
                    <img src="../../../assets/gambar/icon/help.svg" alt="">
                    <p>Bantuan</p>
                </div>
                <div @click.prevent="openModal('logout')" class="square-icon">
                  <img src="../../../assets/gambar/icon/logout.svg" alt="" />
                  <p>Keluar</p>
                </div>
            </div>
    </div>
  <transition name="modal">
    <div v-if="isModalOpen" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
          <h2>{{ popupTitle }}</h2>
          <!-- profil -->
          <form id="form" v-if="currentForm == 'profil'">
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
              <div class="button-group-flex">
                <button @click="closeModal" class="button-cancel-54">Batal</button>
                <button class="button-54">Ubah</button>
              </div>
            </div>
          </form>
          <!-- password -->
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
                <button @click="closeModal" class="button-cancel-54">Batal</button>
                <button class="button-54">Ubah</button>
              </div>
            </div>
          </form>
          <!-- help -->
          <form id="form" v-if="currentForm == 'help'">
            <div class="group-from">
              <label for="current_password">Layanan</label>
              <p>Saat ini Pelayan bisa melalui dari kami dengan cara menggubungi no berikiut : <stron>0811820083</stron></p>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="button-cancel-54">Batal</button>
                <button class="button-54">Bantuan</button>
              </div>
            </div>
          </form>
           <!-- logout -->
          <form @submit.prevent="submitLogout" id="form" v-if="currentForm == 'logout'">
            <div class="group-from">
              <p>Yakin Keluar Dari Aplikasi ?</p>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="button-cancel-54">Batal</button>
                <button type="submit" class="button-54">Keluar</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  </transition>
</template>

<script>
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
  components:{},
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
      }else if (this.currentForm == "logout") {
        this.popupTitle = "keluar";
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitLogout(){this.$router.push("/login");},
  },
};
</script>

<style lang="scss" scoped>
/* CSS */
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #a2ff86;
  cursor: pointer;
  border: 3px solid #a2ff86;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  color: black;
  top: 5px;
  left: 5px;
}
.button-cancel-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #ef6262;
  cursor: pointer;
  border: 3px solid #ef6262;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


.button-cancel-54:active {
  box-shadow: 0px 0px 0px 0px;
  color: black;
  top: 5px;
  left: 5px;
}
.button-group-flex {
  gap: 13px;
}
@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
  .button-cancel-54 {
    padding: 0.25em 0.75em;
  }
}
</style>