<template>
  <div class="container-login">
        <div class="contain-form">
            <div class="banner">
                <img src="../../../assets/gambar/iconic.png" alt="">
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-label" for="">email</label>
                    <input type="email" class="form-control" v-model="from.email" required/>
                    
                </div>
                <div class="form-group">
                    <label class="form-label" for="">password</label>
                    <input type="password" class="form-control" v-model="from.password" required/>
                    
                </div>
                <div class="form-group display-button">
                    <button type="sumbit" class="button-54">Masuk</button>
                    
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
import Swal from 'sweetalert2';
export default {
  name: "LoginView",
  created() {},
  data() {
    return {
      from:{
        email:null,
        password:null,
      }
    };
  },
  methods:{
    submit(){
      // console.log(this.from)
      this.$store.dispatch('auth/authActionLogin',{payload:{
        email:this.from.email,
        password:this.from.password
      }}).then((response)=>{
        Swal.fire({
          title: 'Success',
          text: `${response.message}`,
          icon: 'success',
        }).then(()=>{
          this.from.email = ""
          this.from.password = ""
          this.$router.push('/')
        })
      }).catch((error)=>{
        Swal.fire({
          title: 'Warning',
          text: `${error}`,
          icon: 'warning',
        }).then(()=>{
          this.from.email = ""
          this.from.password = ""
        })
      })
    },
  }
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