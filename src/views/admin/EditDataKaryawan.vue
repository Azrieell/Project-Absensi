<template>
  <Loading v-if="loading" />
  <div v-else :key="employee.uuid" class="container mx-auto p-5">
    <div class="flex flex-row">
      <div class="w-8/12">
        <div
          class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mx-4">
          <h1><b>Edit Foto Karyawan</b></h1>
          <div class="pt-5 mx-5">
            <!-- Tampilkan gambar profil -->
            <img :src="employeeEditData.file || employee.url" :alt="employeeEditData.file || employee.url"
              class="h-64 w-64 rounded-full">
            <!-- Input untuk mengganti foto -->
            <label for="file" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">GANTI
              FOTO</label>
            <input type="file" id="file" @change="onFileChange"
              class="bg-white border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
          </div>
        </div>
      </div>
      <div class="w-full">
        <div
          class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
          <div class="pt-2">
            <form @submit.prevent="saveEmployee">
              <h1><b>Edit Data Karyawan</b></h1>
              <div class="mb-6 pt-2">
                <label for="nip" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NIP</label>
                <input type="number" id="nip" required placeholder="Masukkan NIP" v-model="employeeEditData.nip"
                  class="bg-white border-gray-500 text-sm focus:ring-gray-300 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">

                <label for="nama" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NAMA</label>
                <input type="text" id="nama" required placeholder="Masukkan Nama" v-model="employeeEditData.nama"
                  class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">

                <label for="kota" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">TEMPAT TANGGAL
                  LAHIR</label>
                <div class="flex">
                  <div class="relative w-6/12 flex-shrink-0 mx-1">
                    <input type="text" id="kota" required placeholder="Masukkan Kota Tempat Lahir"
                      v-model="employeeEditData.kota"
                      class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                  </div>
                  <input type="date" id="ttl" required placeholder="Masukkan Tempat Tanggal Lahir"
                    v-model="employeeEditData.tgl_lahir"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                </div>

                <label for="jenis_kelamin" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">JENIS
                  KELAMIN</label>
                <select id="jenis_kelamin" required v-model="employeeEditData.jenis_kelamin"
                  class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                  <option value="" disabled>Pilih jenis kelamin</option>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>

                <label for="agama" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">AGAMA</label>
                <select id="agama" required v-model="employeeEditData.agama"
                  class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                  <option value="" disabled>Pilih Agama</option>
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Katolik">Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha ">Buddha </option>
                  <option value="Khonghucu">Khonghucu</option>
                </select>

                <label for="alamat" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">ALAMAT</label>
                <textarea name="alamat" id="alamat" cols="20" rows="10" required placeholder="Masukkan Alamat"
                  v-model="employeeEditData.alamat"
                  class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4"></textarea>

                <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">NO
                  TELEPHONE</label>
                <input type="text" id="telp" placeholder="+62" v-model="employeeEditData.no_hp" @input="formatPhoneNumber"
                  class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                <p class="text-red-500 text-xs mt-1">{{ phoneError }}</p>
                <label for="jabatan" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">PILIH
                  JABATAN</label>
                <select id="jabatan" required v-model="employeeEditData.jabatan"
                  class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                  <option value="" disabled>PILIH JABATAN</option>
                  <option v-for="jabatan in getPosisi" :value="jabatan.jabatan">{{ jabatan.jabatan }}
                  </option>
                </select>
              </div>

              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <span v-if="isLoading">Menyimpan...</span>
                <span v-else>Simpan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../../components/Loading.vue';

export default {
  data() {
    return {
      employeeEditData: {
        nip: '',
        nama: '',
        kota: '',
        tgl_lahir: '',
        jenis_kelamin: '',
        agama: '',
        alamat: '',
        no_hp: '',
        jabatan: '',
        file: null,
      },
      phoneError: '',
      isLoading: false,
      loading: true
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapGetters('posisi', ['getPosisi']),
    ...mapGetters('karyawan', ['getEmployeeByUuid', 'getErrorUpdated']),
    employee() {
      return this.getEmployeeByUuid(this.$route.params.uuid);
    },
  },
  methods: {
    ...mapActions('posisi', ['fetchPosisi']),
    ...mapActions('karyawan', ['fetchSingleKaryawan', 'updateEmployee']),
    async saveEmployee() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('karyawan/updateEmployee', {
          uuid: this.$route.params.uuid,
          employeeEditData: this.employeeEditData,
        });
        this.$router.push({ name: 'DataKaryawan' });
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: this.getErrorUpdated || 'Gagal mengedit data karyawan!',
        });
      }
    },
    onFileChange(event) {
      this.employeeEditData.file = event.target.files[0];
    },
    async loadData() {
      // Memastikan data terbaru diambil dari server saat masuk ke halaman edit
      await this.fetchSingleKaryawan(this.$route.params.uuid);
      const employee = this.getEmployeeByUuid(this.$route.params.uuid);
      this.employeeEditData.nip = employee.nip;
      this.employeeEditData.nama = employee.nama;
      this.employeeEditData.kota = employee.kota;
      this.employeeEditData.tgl_lahir = employee.tgl_lahir;
      this.employeeEditData.jenis_kelamin = employee.jenis_kelamin;
      this.employeeEditData.agama = employee.agama;
      this.employeeEditData.alamat = employee.alamat;
      this.employeeEditData.no_hp = employee.no_hp;
      this.employeeEditData.jabatan = employee.jabatan;
      this.employeeEditData.file = employee.url;
    },
    formatPhoneNumber() {
      let phoneNumber = this.employeeEditData.no_hp;

      // Remove any non-numeric characters except '+'
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, "");

      // Ensure the number starts with '+62'
      if (!phoneNumber.startsWith("+62")) {
        phoneNumber = "+62" + phoneNumber;
      }

      // Limit the total length to 14 characters, including '+62'
      if (phoneNumber.length > 15) {
        phoneNumber = phoneNumber.slice(0, 15);
      }

      this.employeeEditData.no_hp = phoneNumber;

      // Perform validation as needed
      if (phoneNumber.length !== 14 && phoneNumber.length !== 15) {
        this.phoneError = "Nomor telepon harus terdiri dari 14 atau 15 digit setelah +62.";
      } else {
        this.phoneError = "";
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
  beforeMount() {
    this.fetchPosisi();
    this.loadData();
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