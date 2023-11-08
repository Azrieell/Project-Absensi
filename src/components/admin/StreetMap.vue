<template>
 <div id="map" class="rounded-xl"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import L from 'leaflet';
import "leaflet/dist/leaflet"
export default {
  data() {
    return {
      map: null,
      circle: null,
    };
  },
  computed: {
    ...mapGetters("company",["getCompany"]),
    locationAvailable() {
      return (
        this.getCompany &&
        this.getCompany.latitude !== undefined &&
        this.getCompany.longitude !== undefined &&
        this.getCompany.radius !== undefined
      );
    },
  },
  methods: {
    initMap() {
      if (this.locationAvailable) {
        const { latitude, longitude, radius } = this.getCompany;

        this.map = L.map("map").setView([latitude, longitude], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 20,
        }).addTo(this.map);

        this.circle = L.circle([latitude, longitude], {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: radius,
        }).addTo(this.map);
      }
    },
  },
  watch: {
    locationAvailable: function (newLocationAvailable) {
      if (newLocationAvailable) {
        this.initMap();
      }
    },
  },
  mounted() {
    if (this.locationAvailable) {
      this.initMap();
    }
  },
};
</script>
<style>
#map {
  height: 400px;
  width: 400px;
}
</style>
