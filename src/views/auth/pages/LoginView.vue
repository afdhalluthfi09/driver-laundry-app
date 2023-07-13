<template>
  <div class="container-login">
        <div class="contain-form">
            <div class="banner">
                <img src="../../../assets/gambar/iconic.png" alt="">
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-label" for="">email</label>
                    <input type="text" class="form-control" v-model="from.email"/>
                    <div v-if="error">
                      <div v-for="email in error.email" :key="email.index">
                          <small class="text-red"> {{ email }} </small>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="">password</label>
                    <input type="password" class="form-control" v-model="from.password"/>
                    <div v-if="error">
                      <div v-for="password in error.password" :key="password.index">
                        <small class="text-red"> {{ password }} </small>
                      </div>
                    </div>
                </div>
                <div class="form-group display-button">
                    <button type="sumbit" class="btn-submit">Masuk</button>
                    
                </div>
            </form>
            <router-link to="/register">
              <small>Belum Punya Akun ? Daftar Disini</small>
            </router-link>
            <button class="btn-google">Google</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  created() {},
  data() {
    return {
      from:{
        email:null,
        password:null,
        error:[]
      }
    };
  },
}
</script>

<style lang="scss">
@import "@/assets/index.scss";
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