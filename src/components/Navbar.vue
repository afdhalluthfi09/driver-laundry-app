<template>
  <!-- navbar -->
  <div class="navbar">
    <div>
      <router-link  :to="getIsDisabled ? '#' : '/'">
        <img src="../assets/gambar/icon/iconhome.svg" alt="iconhome" />
        <p>Home</p>
      </router-link>
    </div>
    <div>
      <router-link  :to="getIsDisabled ? '#' : '/pesanan'">
        <img src="../assets/gambar/icon/iconcuci.svg" alt="iconcuci" />
        <p>Pesanan</p>
      </router-link>
    </div>
    <div>
      <router-link   :to="getIsDisabled ? '#' : '/setting'">
        <img src="../assets/gambar/icon/iconsetting.svg" alt="iconsetting" />
        <p>Akun</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "NavbarComponent",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed:{
    ...mapGetters(["getIsDisabled"])
  },
  mounted() {
    this.getIsDisabled
  },
};
</script>

<style lang="scss" scoped></style>