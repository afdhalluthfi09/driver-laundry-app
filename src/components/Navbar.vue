<template>
  <!-- navbar -->
  <div class="navbar">
    <div>
      <router-link to="/">
        <img src="../assets/gambar/icon/iconhome.svg" alt="iconhome" />
        <p>Home</p>
      </router-link>
    </div>
    <div>
      <router-link to="/pesanan">
        <img src="../assets/gambar/icon/iconcuci.svg" alt="iconcuci" />
        <p>Pesanan</p>
      </router-link>
    </div>
    <div>
      <router-link to="/setting">
        <img src="../assets/gambar/icon/iconsetting.svg" alt="iconsetting" />
        <p>Akun</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>