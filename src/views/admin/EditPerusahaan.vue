<template>
  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7 mb-12"><b>Perusahaan</b></h1>
    </div>
  </div>
  <div class="container">
    <div class="w-500 bg-slate-800 h-500 pt-5 rounded-lg text-white text-2xl mt-12 p-5 mb-4">
      <form @submit.prevent="updateCompany">
        <div class="mx-20">
          <h2 class="mb-5 ml-5">Identitas</h2>
          <hr>
          <div class="grid grid-cols-3 mt-9">
            <div class="ml-5">
              <h4>Nama :</h4>
            </div>
            <div>
              <input type="text" v-model="companyData.nama"
                class="bg-white text-gray-800 border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4"
                placeholder="Nama">
            </div>
          </div>
          <div class="grid grid-cols-3 mt-9">
            <div class="ml-5">
              <h4>Alamat :</h4>
            </div>
            <div>
              <textarea name="#" id="" v-model="companyData.alamat" cols="20" rows="8"
                class="bg-white text-gray-800 border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4"
                placeholder="alamat"></textarea>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-9">
            <div class="ml-5 mb-10">
              <h4>Jam buka & tutup :</h4>
            </div>
            <div>
              <div class="flex">
                <div class="relative w-6/12 flex-shrink-0 mx-1">
                  <input type="time" v-model="companyData.jam_buka"
                    class="bg-white text-gray-800 border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                </div>
                <input type="time" v-model="companyData.jam_tutup"
                  class="bg-white text-gray-800 border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="ml-5">Lokasi : </div>
            <div class="mr-12 mb-4">
              <div id="map" class="rounded-xl"></div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="ml-5">Radius : </div>
            <div class="mr-12">
              <input v-model="companyData.radius" type="number" placeholder="Radius (meter)"
                class="bg-white text-gray-800 border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4" />
            </div>
          </div>
          <div class="mt-12 ml-5 grid grid-cols-3">
            <h4>Status : </h4>
            <div>
              <label class="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" v-model="companyData.status" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-200 dark:text-gray-300">{{ companyData.status ? 'Buka' :
                  'Tutup'
                }}</span>
              </label>
            </div>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded mt-12 ml-5">
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      companyData: {
        nama: '',
        alamat: '',
        longitude: '',
        latitude: '',
        radius: '',
        jam_buka: '',
        jam_tutup: '',
        status: null,
      },
      map: null,
      circle: null,
    };
  },
  computed: {
    ...mapGetters('company', ['getCompany']),
    company() {
      return this.getCompany;
    },
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
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    ...mapActions('company', ['fetchCompany', 'updateCompany']),

    async updateCompany() {
      try {
        // delete this.companyData.latitude;
        // delete this.companyData.longitude;

        await this.$store.dispatch('company/updateCompany', this.companyData).then(() => {
          this.$router.push({ name: 'Perusahaan' });
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'gagal mengedit data perusahaan!',
        })
      }
    },
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
        // Inisialisasi marker yang dapat digandeng
        this.marker = L.marker([latitude, longitude], {
          draggable: true,
        }).addTo(this.map);
        // Menambahkan event handler untuk penanganan gandeng marker
        this.marker.on("dragend", (event) => {
          const { lat, lng } = event.target.getLatLng();
          console.log("New Location:", lat, lng);
          this.companyData.latitude = lat;
          this.companyData.longitude = lng;
        });
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
  created() {
    this.fetchCompany();
  },
  mounted() {
    if (this.locationAvailable) {
      this.initMap();
    }
    const company = this.company
    this.companyData.nama = company.nama;
    this.companyData.alamat = company.alamat;
    this.companyData.jam_buka = company.jam_buka;
    this.companyData.jam_tutup = company.jam_tutup;
    this.companyData.status = company.status;
    this.companyData.longitude = company.longitude;
    this.companyData.latitude = company.latitude;
    this.companyData.radius = company.radius;
  },
}
</script>
