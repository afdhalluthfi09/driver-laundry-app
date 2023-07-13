<template>
  <div class="container-main">
    <!-- header -->
    <HeaderComponent/>
    <!-- bar status -->
    <StatusComponent/>
    <!-- main -->
    <router-view></router-view>
    <NavbarComponent/>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header.vue'
import StatusComponent from '../../components/Status.vue'
import NavbarComponent from '../../components/Navbar.vue'
export default {
  name: "MainView",
  created() {},
  data() {
    return {};
  },
  components:{HeaderComponent,StatusComponent,NavbarComponent},
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>