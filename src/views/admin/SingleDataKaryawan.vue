<template>
  <div class="container">
    <div v-if="employee == 0" class="animate-pulse"> 
    <span class="text-center text-3xl font-semibold">
      Data not found
    </span>
  </div>
    <div v-else>
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <div class="text-lg font-semibold mb-4">Profil Karyawan</div>
      <div class="pt-4">

        <div class="flex flex-row">
          <div class="basis-1/2 mx-10">
            
              <img :src="employee.url ||  'https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png'" alt="Gambar yang Dipilih"
              class="p-1 w-72 h-72 rounded-full border border-gray-950">  
              <div class="text-sm p-5 font-semibold mb-4">Akun Pengguna</div> 
              <div class="mb-4 pl-5">
                <label class="text-sm text-gray-600">Username:</label>
                <div class="text-lg font-medium">{{ employee['user'].name }}</div>
              </div> 
              <div class="mb-4 pl-5">
                <label class="text-sm text-gray-600">Email:</label>
                <div class="text-lg font-medium">{{ employee['user'].email }}</div>
              </div> 
              <div class="mb-4 pl-5">
                <label class="text-sm text-gray-600">Role:</label>
                <div class="text-lg font-medium">{{ employee['user'].role }}</div>
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
              
              <!-- Tambahkan lebih banyak informasi profil karyawan di sini -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>


<style>
table {
  font-family: 'Fredoka', sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid white;
  text-align: left;
  padding: 8px;
}
</style>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  computed: {
    ...mapGetters('karyawan', ['getEmployeeByUuid']),
      employee() {
        return this.getEmployeeByUuid(this.$route.params.uuid);
      },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    ...mapActions('karyawan', ['fetchSingleKaryawan'])
  },
  created() {
    this.fetchSingleKaryawan();
  },
  mounted(){
    const employeeUuid = this.$route.params.uuid;
      this.fetchSingleKaryawan(employeeUuid);
  }
}
</script>