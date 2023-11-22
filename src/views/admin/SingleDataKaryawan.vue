<template>
  <Loading v-if="loading" />
  <div v-else :key="employee.uuid" class="container">
    <div v-if="employee">
      <div class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
        <div class="text-lg font-semibold mb-4">Profil Karyawan</div>
        <div class="pt-4 flex flex-row">
          <div class="basis-1/2 mx-10">
            <img :src="employee?.url || 'https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png'" alt="Gambar yang Dipilih" class="p-1 w-72 h-72 rounded-full border border-gray-950">
            <div class="text-sm p-5 font-semibold mb-4">Akun Pengguna</div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Username:</label>
              <div class="text-lg font-medium">{{ employee.name }}</div>
            </div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Email:</label>
              <div class="text-lg font-medium">{{ employee.email }}</div>
            </div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Role:</label>
              <div class="text-lg font-medium">{{ employee.role }}</div>
            </div>
          </div>
          <div class="basis-1/2 p-4">
            <div class="w-1/2">
              <div class="mb-4">
                <label class="text-sm text-gray-600">NIP:</label>
                <div class="text-lg font-medium">{{ employee.nip }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Nama:</label>
                <div class="text-lg font-medium">{{ employee.nama }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Tempat tanggal lahir:</label>
                <div class="text-lg font-medium">{{ employee.kota }}, {{ employee.tgl_lahir }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Jenis kelamin:</label>
                <div class="text-lg font-medium">{{ employee.jenis_kelamin }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Agama:</label>
                <div class="text-lg font-medium">{{ employee.agama }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Alamat:</label>
                <div class="text-lg font-medium">{{ employee.alamat }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">No. Handphone:</label>
                <div class="text-lg font-medium">{{ employee.no_hp }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Jabatan:</label>
                <div class="text-lg font-medium">{{ employee.jabatan }}</div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-8 border-t-2 border-gray-300" />
        <div class="text-lg font-semibold mt-8 mb-4 pl-12">Absensi dan Informasi</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-12">
          <div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Absensi:</label>
              <div class="text-lg font-medium">{{ employee.presence.length }}</div>
            </div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Sakit:</label>
              <div class="text-lg font-medium">{{ employee.informationSick.length }}</div>
            </div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Izin:</label>
              <div class="text-lg font-medium">{{ employee.informationPermission.length }}</div>
            </div>
          </div>
          <div>
            <template v-if="employee['presence'].length > 0">
              <label class="text-sm text-gray-600">Detail Absensi:</label>
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="text-left">Tanggal Absen</th>
                    <th class="text-left">Jam Masuk</th>
                    <th class="text-left">Jam Pulang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(presence, index) in paginatedAbsensi" :key="presence.id">
                    <td>{{ presence.tgl_absen }}</td>
                    <td>{{ presence.masuk }}</td>
                    <td>{{ presence.pulang }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="mt-4 flex justify-between items-center">
                <button @click="previousPage" :disabled="currentPage === 1" class="px-2 py-2 text-xs bg-blue-500 text-white rounded">
                  Halaman Sebelumnya
                </button>
                <span class="mx-2">Halaman {{ currentPage }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-2 text-xs bg-blue-500 text-white rounded">
                  Halaman Berikutnya
                </button>
              </div>
            </template>
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
import Loading from '../../components/Loading.vue';

export default {
  data() {
    return {
      loading: true,
      pageSize: 5, // Ubah sesuai dengan jumlah item per halaman yang diinginkan
      currentPage: 1,
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapGetters('karyawan', ['getEmployeeByUuid']),
    employee() {
      return this.getEmployeeByUuid(this.$route.params.uuid);
    },
    paginatedAbsensi() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.employee['presence'].slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.employee['presence'].length / this.pageSize);
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    ...mapActions('karyawan', ['fetchSingleKaryawan']),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const employeeUuid = to.params.uuid;
    this.loading = true;
    this.fetchSingleKaryawan(employeeUuid)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
          next();
        }, 1000);
      });
  },
  created() {
    const employeeUuid = this.$route.params.uuid;
    this.fetchSingleKaryawan(employeeUuid).then(() => {
      console.log('Employee data:', this.employee);
    });
  },

  mounted() {
    const employeeUuid = this.$route.params.uuid;
    this.fetchSingleKaryawan(employeeUuid)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
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