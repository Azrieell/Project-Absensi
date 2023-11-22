<template>
  <div class="w-full h-full">
    <dh-component>
      <div class="flex flex-no-wrap">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
        <div style="min-height: 1900px;"
          class="w-64 sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
          <div class="fixed px-7">
            <div class="h-16 w-full flex items-center">
              <h2 class="font-medium text-white text-4xl p- mx-auto mt-12"> <!-- Removed inline style -->
                <span class="font-bold">Admin</span>
                <p class="text-sm text-ellipsis overflow-hidden">{{ getCompany.nama || 'Company...' }}</p>
              </h2>
            </div>
            <ul class="mt-12">
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-9">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-house-door" viewBox="0 0 16 16">
                    <path
                      d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/home">
                    <span class="text-xl ml-3 text-white hover:text-gray-300"
                      style="font-family: 'Fredoka', sans-serif;">Beranda</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-bar-chart" viewBox="0 0 16 16">
                    <path
                      d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/datakaryawan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Karyawan</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/datauser">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data User</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-card-checklist" viewBox="0 0 16 16">
                    <path
                      d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path
                      d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/datajabatan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Jabatan</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-calendar3" viewBox="0 0 16 16">
                    <path
                      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                    <path
                      d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/dataabsen">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Absen</span>
                  </router-link>
                </a>
                <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">{{
                  presence.length }}
                </div>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-window-dock" viewBox="0 0 16 16">
                    <path
                      d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    <path
                      d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/keterangan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Keterangan</span>
                  </router-link>
                </a>

              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center">
                <a href="javascript:void(0)"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white mb-9">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt"
                    viewBox="0 0 16 16">
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <router-link @click="scrollToTop" to="/admin/perusahaan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Perusahaan</span>
                  </router-link>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="min-h-screen md:w-4/5 w-11/12 px-6">
          <NavbarAdmin></NavbarAdmin>
          <transition name="fade"> <!-- Add transition class name -->
            <router-view v-if="!loading" />
          </transition>
          <Loading v-if="loading" />
        </div>
      </div>
    </dh-component>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex"
import Loading from '../components/Loading.vue';
import NavbarAdmin from "../components/admin/NavbarAdmin.vue";

export default {
  name: 'AdminLayout',
  components: {
    Loading,
    NavbarAdmin
  },
  data(){
    return{
      selectedDate: null,
    }
  },
  computed: {
    ...mapGetters('presence', ['getPresence']),
    ...mapGetters('company', ['getCompany']),
    presence() {
      // Filter data berdasarkan tanggal yang dipilih
      let filteredData = this.getPresence;
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate);
        filteredData = filteredData.filter(presence => new Date(presence.tgl_absen) >= selectedDate);
      }
      // Jika setelah filtering data kosong, kembalikan array kosong
      if (filteredData.length === 0) return [];

      return filteredData;
    },
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('karyawan', ['fetchKaryawan']),
    ...mapActions('presence', ['fetchPresence']),
    ...mapActions('company', ['fetchCompany']),
    ...mapActions('information',['fetchInformation']),
    ...mapActions('user',['fetchUser']),
    ...mapActions('posisi',['fetchPosisi']),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    filterByDate() {
      // Pemanggilan ini akan memperbarui data yang ditampilkan berdasarkan tanggal yang dipilih
      this.currentPage = 1;
    },
  },
  data() {
    return {
      loading: false
    };
  },
  watch: {
    $route(to, from) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {
    this.loading = false;
  },
  created(){
       // Set tanggal awal menjadi hari ini
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.selectedDate = `${year}-${month}-${day}`;

    this.fetchKaryawan();
    this.fetchPresence();
    this.fetchCompany();
    this.fetchInformation();
    this.fetchUser();
    this.fetchPosisi();
  }
}
</script>  
<style scoped>
/* Add this style block to your component's template */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>