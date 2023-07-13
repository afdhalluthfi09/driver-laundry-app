<template>
  <div class="header">
            <img src="../assets/gambar/icon/header-antar-laundry.svg" alt="">
            <h2 class="text-sambutan">Selamat Datang</h2>
            <h1 class="text-user" v-if="getUser != null" >{{ getUser.user }}</h1>
            <h1 class="text-user" v-else>No Name</h1>
        </div>
</template>

<script>
import  {mapGetters} from 'vuex'
export default {
  name: "HeaderComponent",
  created() {
    console.log(this.getUser)
    console.log('token : ',localStorage.getItem('token'));
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed:{
    ...mapGetters({getUser:"auth/getUser"})
  }
};
</script>

<style lang="scss" scoped></style>