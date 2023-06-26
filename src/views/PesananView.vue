<template>
  <div class="container-pesanan">
    <!-- header -->
    <HeaderComponent/>
    <!-- status -->
    <StatusComponent/>
    <!-- main -->
    <div class="main">
      <div class="message-title">Pesan Aktif</div>
      <div class="contain-message">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <div class="card-body collapse-button" @click="toggleItem(index)">
              <div class="contain-body">
                <img src="../assets/gambar/icon/icon-cuci.svg" alt="">
                <div class="display-flex-column">
                    <div class="detail-status">Pesanan No.{{ item.noPesana }}</div>
                    <div class="detail-status">{{ item.status }}</div>
                </div>
              </div>
            </div>
            <div v-if="item.isExpanded">
              {{ item.description }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import StatusComponent from '../components/Status.vue'

export default {
  name: "PesananViewComponent",
  created() {},
  data() {
    return {
      items: [
        { name: "Item 1", description: "Pakaian Anda Sudah Selesai Di Proses Sebentar Lagi Akan Di antar Ke Lokasi Anda",noPesana: "0002142", status: "selesai",isExpanded: false },
        { name: "Item 2", description: "Pakaian Anda Sedang Selesai Di Proses Sebentar Lagi Akan Di antar Ke Lokasi Anda",noPesana: "0002142", status: "belum selesai",isExpanded: false },
        { name: "Item 3", description: "Pakaian Anda Sedang Di Jemput Sebentar Lagi Ke Lokasi Anda",noPesana: "0002142", status: "jemput",isExpanded: false },
      ],
    };
  },
  components:{
    HeaderComponent,
    StatusComponent
  },
  props: {},
  methods: {
    toggleItem(index) {
      this.items[index].isExpanded = !this.items[index].isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped></style>