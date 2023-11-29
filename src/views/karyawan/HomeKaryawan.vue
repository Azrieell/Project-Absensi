<template>
  <div class="rounded-t-lg w-full p-4 mt-20 sm:mt-52">
    <!-- Button-->
    <div
      class="mx-auto grid p-5 gap-y-3 grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center overflow-hidden shadow-xl rounded-lg mb-10">
      <div class="group cursor duration-200 hover:-translate-y-4">
        <button v-if="!isAbsenMasuk && !isAbsenPulang" :disabled="presensiEmployee.pulang !== 'Belum ada data'"
          @click="absen('masuk')" class="r-500 mb-5 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            :class="{ 'text-gray-500': presensiEmployee.pulang !== 'Belum ada data' }"
            class="bi bi-clipboard-data w-11 h-10 cursor-no-drop text-rose-600 " viewBox="0 0 16 16">
            <path
              d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
          <br>
          <span class="text-base font-bold">Absen</span>
          <p class="text-xs">Masuk</p>
        </button>
        <button v-else-if="isAbsenMasuk == true && !isAbsenPulang" :disabled="presensiEmployee.masuk === 'Belum ada data'"
          @click="absen('pulang')" class="r-500 mb-5 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            class="bi bi-clipboard-data w-11 h-10 text-rose-600 " viewBox="0 0 16 16">
            <path
              d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
          <br>
          <span class="text-base font-bold">Absen</span>
          <p class="text-xs">Pulang</p>
        </button>
        <button v-else class="r-500 mb-5 mt-6" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            class="bi bi-clipboard-data w-11 h-10 text-gray-600 " viewBox="0 0 16 16">
            <path
              d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
        </button>
      </div>
      <div class="group cursor duration-200 hover:-translate-y-4">
        <div>
          <router-link to="/karyawan/sakitkaryawan">
            <button className="mb-4 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12 text-rose-600 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              <br>
              <b>Sakit</b>
            </button>
          </router-link>

        </div>
      </div>

      <div class="group cursor duration-200 hover:-translate-y-4">
        <div>
          <router-link to="/karyawan/izinkaryawan">
            <button className="mb-4 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12 text-rose-600 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <br>
              <b>Izin</b>
            </button>
          </router-link>

        </div>
      </div>
    </div>
    <!-- Akhir Button -->


    <!-- Jadwal Kedatangan -->
    <div v-if="presensiEmployee.masuk !== 'Belum ada data' || presensiEmployee.pulang !== 'Belum ada data'"
      class="container">
      <div class="flex justify-center gap-5">
        <div v-if="presensiEmployee.masuk !== 'Belum ada data'"
          class="bg-rose-500 max-w-xs rounded-xl overflow-hidden shadow-xl">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-white w-40">Jam Masuk</div>
            <p class="text-white text-center text-xl">
              {{ presensiEmployee.masuk }}
            </p>
          </div>
        </div>
        <div v-if="presensiEmployee.pulang !== 'Belum ada data'"
          class="bg-sky-500 max-w-xs rounded-xl overflow-hidden shadow-xl">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-white w-40">Jam Pulang</div>
            <p class="text-white text-center text-xl">
              {{ presensiEmployee.pulang || 'belum Pulang' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-5 text-gray-500">Belum ada data jadwal kedatangan hari ini.</div>
    <!-- Akhir Jadwal Kedatangan -->


    <!-- Card Keterangan -->
    <p class="mt-9 ml-3 text-xl font-bold">Keterangan</p>
    <p class="ml-3 mt-2 text-gray-400">Keterangan dalam satu bulan</p>
    <div class="flex justify-center mt-3 gap-2 sm:gap-12">
      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl border-2 w-40 sm:w-64">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Kehadiran</div>
          <p class="text-gray-700 text-center">
            {{ getpresensiemployee ? getpresensiemployee.length : 0 }}
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl border-2 w-40 sm:w-64">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Sakit</div>
          <p class="text-gray-700 text-base text-center">
            {{ getInformation && getInformation['informationSick'] ? getInformation['informationSick'].length : 0 }}
          </p>
        </div>
      </div>

      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl border-2 w-40 sm:w-64">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Izin</div>
          <p class="text-gray-700 text-center">
            {{ getInformation && getInformation['informationPermission'] ? getInformation['informationPermission'].length
              : 0 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Akhir Card Keterangan -->

    <!-- Artikel -->
    <p class="mt-9 ml-3 text-xl font-bold">Artikel</p>
    <p class="ml-3 mt-2 text-gray-400">Baca artikel dari perusahaan</p>
    <div class="flex flex-col bg-white m-auto p-auto">
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap md:ml-15 mt-5">
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Akhir Artikel -->

    <p class="ml-3 text-xl font-bold">Informasi</p>
    <p class="ml-3 mt-2 text-gray-400">Daftar Informasi Perusahaan</p>
    <div class="grid grid-cols-3 text-center">
      <div class="text-rose-600 mt-8 ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle"
          viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <div class="mt-8">
        <p class="text-medium font-bold">23 Mei 2023</p>
        <p>Libur untuk siswa karena guru ada kegiatan rapat</p>
      </div>
    </div>
    <hr class="mt-5 my-6 border-gray-400 sm:mx-auto">
  </div>
</template>
<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  data() {
    return {
      tgl_absen: '',
    }
  },
  computed: {
    ...mapGetters('informationemployee', ['getInformation', 'getInformationLength']),
    ...mapGetters('presensi', ['getpresensiemployee']),
    getpresensiemployee() {
      return this.$store.getters['presensi/getpresensiemployee'] || [];
    },
    presensiEmployee() {
      const presensiData = this.getpresensiemployee;

      console.log('presensiData:', presensiData);
      console.log('today:', this.tgl_absen);

      // Lakukan filter data berdasarkan tanggal terbaru/hari ini
      const filteredData = presensiData.filter(item => {
        return item.tgl_absen === this.tgl_absen;
      });
      console.log('filteredData:', filteredData);

      if (filteredData.length > 0) {
        const firstData = filteredData[0];
        if (firstData.masuk !== undefined && firstData.pulang !== undefined) {
          // Lakukan sesuatu dengan properti 'masuk' dan 'pulang'
          console.log('Jam Masuk:', firstData.masuk);
          console.log('Jam Pulang:', firstData.pulang);
          // ... (lanjutan logika Anda)
          return firstData;
        }
      }

      return {
        masuk: 'Belum ada data',
        pulang: 'Belum ada data',
      };
    },

    isAbsenMasuk() {
      console.log('Checking Absen Masuk:', this.getpresensiemployee);
      return this.getpresensiemployee.some(item => item.type === 'masuk');
    },
    isAbsenPulang() {
      console.log('Checking Absen Pulang:', this.getpresensiemployee);
      return this.getpresensiemployee.some(item => item.type === 'pulang');
    },

  },
  methods: {
    ...mapActions('informationemployee', ['fetchInformation']),
    ...mapActions('presensi', ['fetchPresensiEmployee']),
    absen(type) {
      // Implementasikan logika untuk melakukan absen
      if (type === 'masuk') {
        // Lakukan sesuatu untuk absen masuk
        this.$router.push('/karyawan/absenkaryawan');
      } else if (type === 'pulang') {
        // Lakukan sesuatu untuk absen pulang
        this.$router.push('/karyawan/absenpulang');
      }
    },
    switchPage(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = `${(now.getMonth() + 1)}`.padStart(2, '0');
      const date = `${now.getDate()}`.padStart(2, '0');
      this.tgl_absen = `${year}-${month}-${date}`;
    },
    async loadData() {
      try {
        await this.fetchPresensiEmployee();
      } catch (error) {
        console.error('Error fetching presensi employee data:', error);
      }
    },
  },
  async loadData() {
    try {
      this.updateTime(); // Memanggil updateTime sebelum mengambil data
      await this.fetchPresensiEmployee();
    } catch (error) {
      console.error('Error fetching presensi employee data:', error);
    }
  },

  created() {
    this.fetchInformation(); // Hapus jika tidak diperlukan
    this.updateTime(); // Memanggil updateTime untuk pertama kali
    this.loadData(); // Memanggil loadData
  },

  mounted() {
    this.fetchInformation(); // Hapus jika tidak diperlukan
    this.loadData(); // Memanggil loadData
    this.updateTime(); // Memanggil updateTime pada saat mounted
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },

  beforeRouteUpdate(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },
};
</script>