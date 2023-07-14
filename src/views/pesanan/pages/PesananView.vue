<template>
    <div class="main">
      <div class="message-title">Pesan Aktif</div>
      <div class="contain-message">
        <div class="list-container">
          <div class="list-animation">
            <ul class="list">
              <li v-for="(item, index) in items" :key="index" :class="{ 'show-detail': item.showDetail }" class="list-item">
                <div class="list-item-header" @click="toggleDetail(index)">
                  {{ item.title }}
                </div>
                <div class="list-item-body" v-show="item.showDetail">
                  {{ item.description }}
                  <div @click.prevent="openGoogleMaps(item.lat, item.lng)"  class="displex">
                    <button class="button-54">Go Lokasi</button>
                  </div>
                </div>
                <button @click="removeItem(index)" class="close-button">×</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div v-if="isModalOpen" id="myModal" class="modal">
        <div class="modal-content">
          <h2>{{ popupTitle }}</h2>
          <form enctype="multipart/form-data" @submit.prevent="submitProfile" id="form" v-if="currentForm == 'profil'">
            <div class="group-from">
              <label for="name">nama</label>
              <input type="file" id="foto" @change.prevent="handleFileChange" name="foto"  required />
            </div>
            <div class="group-from">
              <label for="notelp">Status</label>
              <select name="status" @change.prevent="handleSelectChange" id="status">
                <option value="">Pilih Status</option>
                <option value="lunas">Lunas</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button type="submit" class="button-54">Ubah</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
</template>

<script>
import {mapMutations} from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: "PesananViewComponent",
  created() {},
  data() {
    return {
      items: [
        { title: 'Ambil Laundry', 
          description: 'Jl. Kaliurang No.km, RW.8, gentan, Sinduharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581',
          lat: 123.456, 
          lng: 789.012, 
          showDetail: false},
        { title: 'Ambil Laundry', 
          description: 'Jl. Kaliurang No.km, RW.8, gentan, Sinduharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581', 
          showDetail: false,
          lat: 123.456, lng: 789.012},
        { title: 'Jemput Laundry', 
          description: 'Jl. Kaliurang No.km, RW.8, gentan, Sinduharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581', 
          showDetail: false,
          lat: 789.012, 
          lng: 345.678},
      ],
      isModalOpen: false,
      currentForm: '',
      popupTitle: '',
      form: {
        status: null,
        foto:null
        
      },
    };
  },
  components:{
  },
  props: {},
  methods: {
    ...mapMutations(["setIsDisabled"]),
    toggleDetail(index) {
      this.items[index].showDetail = !this.items[index].showDetail;
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    openGoogleMaps(lat, lng) {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      window.open(googleMapsUrl, '_blank');
      this.openModal('profil')
    },
    submitProfile() {
      console.log(this.form);
      
      Swal.fire({
        title:'Success',
        text:'yey misi penganatran berhasil',
        icon:'success'
      })
      this.$router.push('/')
      this.setIsDisabled(false)
    },
    openModal(formName) {
      this.currentForm = formName;
      this.setIsDisabled(true)
      this.isModalOpen = true;
      if(this.currentForm == 'profil'){
        this.popupTitle = 'profil';
      }
    },
    handleFileChange(event) {
      this.form.photo = event.target.files[0];
      console.log('Selected File:', this.form.photo);
    },
    handleSelectChange(event) {
      this.form.status = event.target.value;
      console.log('Selected Option:', this.form.status);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-animation {
  .list {
    list-style-type: none;
    padding: 0;

    .list-item {
      display: flex;
      width: 228px;
      flex-direction: column;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f0f0f0;
      transition: transform 0.5s ease-in-out;

      &:hover {
        transform: translateX(5px);
      }

      &.show-detail {
        .list-item-body {
          display: block;
        }
      }

      .list-item-header {
        cursor: pointer;
        font-weight: bold;
      }

      .list-item-body {
        display: none;
      }

      .close-button {
        margin-left: auto;
        background-color: transparent;
        border: none;
        font-size: 18px;
        color: #888;
        cursor: pointer;
      }
    }
  }
}
.list-container{
  width: min(70% - 1em, 69em);
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.displex{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #a2ff86;
  cursor: pointer;
  border: 0px solid #a2ff86;
  padding: 0.25em 1.5em;
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
</style>