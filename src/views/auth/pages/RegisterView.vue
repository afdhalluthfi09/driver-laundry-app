<template>
  <div class="container-register">
        <div class="contain-form">
            <div class="banner">
                <img src="../../../assets/gambar/iconic.png" alt="">
            </div>
            <form @submit.prevent="sumbitForm">
                <!-- name -->
                <div class="form-group">
                    <label class="form-label" for="">Name</label>
                    <input type="text" v-model="form.name" class="form-control" name="name"/>
                </div>
                <!-- email -->
                <div class="form-group">
                    <label class="form-label" for="">Email</label>
                    <input type="email" v-model="form.email" class="form-control" name="email"/>
                </div>
                <!-- password -->
                <div class="form-group">
                    <label class="form-label" for="">Password</label>
                    <input type="password"  v-model="form.password" class="form-control" name="password"/>
                    <small v-if="valid">Minimal 8 Karakter ,mengandung huruf besar,kecil,angka,karakter spesial sperti '@ # / dll'</small>
                </div>
                <!-- konfirmasi -->
                <div class="form-group">
                    <label class="form-label" for="">Confirm Password</label>
                    <input type="password"  v-model="form.confirm_password" class="form-control" name="confirm_password"/>
                    <small v-if="isDisabled">pengulangan password harus sama dengan password</small
                    >
                </div>
                <!-- button -->
                <div class="form-group display-button">
                    <button type="submit" :disabled="isDisabled" class="button-54">Daftar</button>
                </div>
            </form>
            <router-link to="/login">
              <small>Sudah Punya Akun ? login Disini</small>
            </router-link>
            <button class="btn-google">Google</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "RegisterView",
  created() {},
  data() {
    return {
        form:{
            name:null,
            email:null,
            password:null,
            confirm_password:null
        },
        minlengtPassword: 8,
        valid: true,
        isDisabled:true
    };
  },
  props: {},

}
</script>

<style lang="scss">
@import "@/assets/index.scss";
small{
    font-size: 12px;
}
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
</style>