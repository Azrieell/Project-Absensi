<template>
  <div class="h-full bg-white p-8">
    <div class="bg-white rounded-lg shadow-xl pb-8">
      <div x-data="{ openSettings: false }" class="absolute right-12 mt-4 rounded">
        <div x-show="openSettings" class="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
          style="display: none;">
          <div class="py-2 border-b">
            <p class="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
            <button class="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                </path>
              </svg>
              <span class="text-sm text-gray-700">Share Profile</span>
            </button>
            <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
                </path>
              </svg>
              <span class="text-sm text-gray-700">Block User</span>
            </button>
            <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm text-gray-700">More Info</span>
            </button>
          </div>
          <div class="py-2">
            <p class="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
            <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                </path>
              </svg>
              <span class="text-sm text-gray-700">Report</span>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-[50px]">
      </div>
      <div class="flex flex-col items-center -mt-20">
        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
          class="w-40 border-4 border-white rounded-full">
        <div class="flex items-center space-x-2 mt-2">
          <p class="text-2xl">{{ userkaryawan.nama }}</p>
        </div>
        <p class="text-gray-700">{{ userkaryawan.jabatan }}</p>
      </div>
      <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div class="flex items-center space-x-4 mt-2">
          <button
            class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <span>Edit</span>
          </button>
          <router-link to="/">
            <button @click="logout"
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
          </router-link>
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
          <div class="px-4 py-2">{{ userkaryawan.nip }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Nama Lengkap</div>
          <div class="px-4 py-2">{{ userkaryawan.nama }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Tempat Lahir</div>
          <div class="px-4 py-2">Bandung</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Tanggal Lahir</div>
          <div class="px-4 py-2">12 Desember 2005</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Jenis Kelamin</div>
          <div class="px-4 py-2">{{ userkaryawan.jenis_kelamin }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Agama</div>
          <div class="px-4 py-2">{{ userkaryawan.agama }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Alamat</div>
          <div class="px-4 py-2">
            <a class="text-blue-800" href="mailto:jane@example.com">{{ userkaryawan.alamat }}</a>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">No Handphone</div>
          <div class="px-4 py-2">{{ userkaryawan.no_hp }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of about section -->
</template>
<style>
  .cls-1 {
    fill: #1877f2;
  }

  .cls-2 {
    fill: #fff;
  }
</style>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    computed: {
      ...mapGetters('userkaryawan', ['getUserKaryawan']),
      userkaryawan() {
        return this.getUserKaryawan;
      },
    },
    methods: {
      ...mapActions('auth', ['logout']),
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      ...mapActions('userkaryawan', ['fetchUserKaryawan'])
    },
    created() {
      this.fetchUserKaryawan();
    },
  }
</script>