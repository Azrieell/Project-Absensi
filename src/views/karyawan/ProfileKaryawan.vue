<template>
  <div class="container">
    <div class="h-full bg-white p-8 sm:mt-10 mt-28">
      <div class="bg-white rounded-lg shadow-xl pb-8">
        <div class="w-full h-[50px]">
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img :src="employee.url || 'https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png'"
            class="w-40 border-4 border-white rounded-full">
          <div class="flex items-center space-x-2 mt-2">
            <p class="text-2xl"> {{ employee.nama }} </p>
          </div>
          <p class="text-gray-700"> {{ employee.email }} </p>
        </div>
        <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div class="flex items-center space-x-4 mt-2">
            <button
              class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <span>Ganti Password</span>
            </button>
              <button @click="islogout"
                class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fill-rule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg></span>
                <span>LogOut</span>
              </button>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section -->
    <div class="bg-white p-10 shadow-xl rounded-sm ml-5 mr-5">
      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span class="tracking-wide mb-5">Informasi Pribadi</span>
      </div>
      <div class="text-gray-700">
        <div class="grid md:grid-cols-2 text-sm">
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Nip</div>
            <div class="px-4 py-2">: {{ employee.nip }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Nama Lengkap</div>
            <div class="px-4 py-2">: {{ employee.nama }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Jabatan</div>
            <div class="px-4 py-2">: {{ employee.jabatan }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Tempat Lahir</div>
            <div class="px-4 py-2">: {{ employee.kota }}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Tanggal Lahir</div>
            <div class="px-4 py-2">: {{ employee.tgl_lahir }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Jenis Kelamin</div>
            <div class="px-4 py-2">: {{ employee.jenis_kelamin }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Agama</div>
            <div class="px-4 py-2">: {{ employee.agama }} </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Alamat</div>
            <div class="px-4 py-2">:
              {{ employee.alamat }}
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">No Handphone</div>
            <div class="px-4 py-2">: {{ employee.no_hp }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  computed: {
    ...mapGetters('userkaryawan', ['getUserKaryawan']),
    employee() {
      return this.getUserKaryawan;
    },  
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('userkaryawan', ['fetchUserKaryawan']),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    islogout(){
      this.logout()
      this.$router.push('/')
    }
  },
  created() {
    this.fetchUserKaryawan();
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },

  beforeRouteUpdate(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },
}
</script>