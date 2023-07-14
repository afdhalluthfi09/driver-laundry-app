<template>
  <router-view/>
</template>

<script>
import {app,messaging} from './firebaseConfig.js'
export default {
  created(){
    app,messaging
  },
  data(){
    return{}
  }
}
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
