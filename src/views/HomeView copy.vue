<template>
  <div class="container-pesanan">
    <!-- header -->
    <HeaderComponent/>
    <!-- status -->
    <StatusComponent/>
    <div style="height:200px; width:100%">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
        <!-- Add other map layers or markers here -->
      </l-map>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import StatusComponent from '../components/Status.vue'
import { LMap, LTileLayer } from 'vue3-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    HeaderComponent,
    StatusComponent
  },
  data() {
    return {
      zoom: 10,
      center: [51.505, -0.09], // London coordinates
      tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    };
  },
};
</script>