<template>
  <div class="container">
    <div v-if="company">
      <div class="w-500 bg-slate-800 h-500 pt-5 rounded-lg text-white text-2xl mt-12 p-5 mb-4">
        <h2 class="mb-5 ml-5">Identitas Perusahaan</h2>
        <hr>
        <div class="grid grid-cols-3 mt-9">
          <div class="ml-5">
            <h4>Nama :</h4>
          </div>
          <div>
           <span> {{ company.nama }}</span>
          </div>
        </div>
        <div class="grid grid-cols-3 mt-9">
          <div class="ml-5">
            <h4>Alamat :</h4>
          </div>
          <div>
           <span> {{ company.alamat }}</span>
          </div>
        </div>
        <div class="grid grid-cols-3 mt-9">
          <div class="ml-5 mb-8">
            <h4>Jam Buka & Tutup :</h4>
          </div>
          <div>
           <span> {{ company.jam_buka }} - {{ company.jam_tutup }}</span>
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="ml-5">Lokasi : </div>
          <StreetMap></StreetMap>
        </div>
        <div class="mt-12 ml-5 grid grid-cols-3">
          <h4>Status : </h4>
          <div class="flex items-center">
        <span :class="{'text-lime-400': company.status, 'text-red-400': !company.status}">
          {{ company.status ? 'Buka' : 'Tutup' }}
        </span>
      </div>
        </div>
        <router-link @click="scrollToTop" to="/admin/perusahaan/edit">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 mx-5 ">
            Edit
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import StreetMap from "../../components/admin/StreetMap.vue"
export default {
  components:{
    StreetMap
  },
  computed: {
    company() {
      return this.$store.state.company.company
    }
  },
  methods: { // Gunakan methods untuk memanggil actions
    ...mapActions('company', ['fetchCompany'])
  },
  async created() {
    try {
      await this.$store.dispatch('company/fetchCompany');
      // Anda dapat mengakses properti nama setelah data sudah diambil
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }
  },
  beforeMount() {
    this.fetchCompany();
  }
}
</script>