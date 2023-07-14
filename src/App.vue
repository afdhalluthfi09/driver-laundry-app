<template>
  <router-view/>
</template>

<script>
export default {
  created(){
    this.$messaging
  },
  data(){
    return{}
  }
}
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
