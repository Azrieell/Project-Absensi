<template>
  <div class="container">
    <div class="flex flex-row">
      <div class="w-7/12">
        <div
          class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12 mx-4">
          <h1><b>Tambah Foto Karyawan</b></h1>
          <div class="pt-5 mx-5">
            <!-- Tampilkan gambar profil jika ada -->
            <img v-if="employeeData.file" :src="employeeData.file" :alt="employeeData.file"
              class="h-64 w-64 rounded-full">
            <!-- Tampilkan placeholder atau pesan jika tidak ada gambar -->
            <div v-else class="h-64 w-64 bg-gray-200 flex items-center justify-center rounded-full">
              <span class="text-gray-500">Preview Foto</span>
            </div>
            <!-- Input untuk mengganti foto -->
            <div v-if="!employeeData.file" class="text-base text-red-500 font-semibold">Foto harus diunggah.</div>
            <div v-if="imageValidation.error" class="text-base text-red-500 font-semibold">{{ imageValidation.message }}
            </div>
            <input type="file" id="file" @change="onFileChange" ref="fileInput"
              class="bg-white border-gray-500 text-sm block w-full p-2.5">
          </div>
        </div>
      </div>
      <div class="basis-full">
        <div
          class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
          <span class="font-bold text-1xl">Tambah Akun Karyawan</span>
          <div class="pt-4">
            <div class="mb-6 pt-2">
              <form @submit.prevent="addEmployee">
                <label for="email" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
                <input type="email" id="email" placeholder="Masukan Email" v-model="employeeData.email"
                  class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">

                <label for="password" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password
                  Sementara</label>
                <div class="relative">
                  <input type="text" disabled id="password" placeholder="Masukan Password" :value="employeeData.password"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4 pr-10" />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button type="button" @click="togglePasswordVisibility"
                      class="text-gray-500 hover:text-gray-700 focus:outline-none">
                      <svg v-if="passwordVisible" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.857-5.857" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 9a8.99 8.99 0 0 1 4.286-7.572A9 9 0 0 1 12 2a9 9 0 0 1 7.716 4.286A8.986 8.986 0 0 1 20 9c0 1.222-.243 2.402-.684 3.493M4.121 4.121a9.107 9.107 0 0 1 2.122-2.121M2 12h1" />
                      </svg>
                      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.857-5.857" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 9a8.99 8.99 0 0 1 4.286-7.572A9 9 0 0 1 12 2a9 9 0 0 1 7.716 4.286A8.986 8.986 0 0 1 20 9c0 1.222-.243 2.402-.684 3.493M4.121 4.121a9.107 9.107 0 0 1 2.122-2.121M2 12h1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <span class="font-bold text-1xl">Isi Data Karyawan</span>
                <div class="mb-6 pt-2">
                  <label for="default-input"
                    class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Nip</label>
                  <input type="number" id="nip" placeholder="Masukan NIP" v-model="employeeData.nip"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-300 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                  <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Nama
                    Lengkap</label>
                  <input type="text" id="nama" placeholder="Masukan Nama" v-model="employeeData.nama"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                  <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Tempat
                    Tanggal Lahir</label>
                  <div class="flex">
                    <div class="relative w-6/12 flex-shrink-0 mx-1">
                      <input type="text" id="kota" placeholder="Masukan Kota Tempat Lahir" v-model="employeeData.kota"
                        class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                    </div>
                    <input type="date" id="ttl" placeholder="Masukan Tempat Tanggal Lahir"
                      v-model="employeeData.tgl_lahir"
                      class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                  </div>
                  <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Jenis
                    Kelamin</label>
                  <select id="jenis_kelamin" v-model="employeeData.jenis_kelamin"
                    class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                    <option value="" disabled>Pilih jenis kelamin</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                  <label for="default-input"
                    class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Agama</label>
                  <select id="agama" v-model="employeeData.agama"
                    class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                    <option value="" disabled>Pilih Agama</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha ">Buddha </option>
                    <option value="Khonghucu">Khonghucu</option>
                  </select>
                  <label for="default-input"
                    class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">ALAMAT</label>
                  <textarea name="" id="" cols="20" rows="10" placeholder="Masukan Alamat" v-model="employeeData.alamat"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4"></textarea>
                  <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">No
                    Telepon</label>
                  <input type="text" id="telp" placeholder="+62" v-model="employeeData.no_hp" @input="formatPhoneNumber"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                  <p class="text-red-500 text-xs mt-1">{{ phoneError }}</p>
                  <label for="jabatan" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Pilih
                    Jabatan</label>
                  <select id="jabatan" v-model="employeeData.jabatan"
                    class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                    <option value="" disabled>Pilih Jabatan</option>
                    <option v-for="jabatan in getPosisi" :value="jabatan.jabatan">
                      {{ jabatan.jabatan }}</option>
                  </select>
                </div>
                <button type="submit" @click="scrollToTop"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <span v-if="isLoading">Menyimpan...</span>
                  <span v-else>Simpan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      employeeData: {
        username: '',
        email: '',
        password: '12345',
        confPassword: '12345',
        nip: '',
        nama: '',
        kota: '',
        tgl_lahir: '',
        jenis_kelamin: '',
        agama: '',
        alamat: '',
        no_hp: '',
        jabatan: '',
        file: null // Untuk file foto
      },
      imageValidation: {
        error: false,
        message: ''
      },
      phoneError: '',
      passwordVisible: false,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters('posisi', ['getPosisi']),
    ...mapGetters('karyawan', ['getErrorAdd']),
  },
  methods: {
    ...mapActions('posisi', ['fetchPosisi']),
    ...mapActions('karyawan', ['createEmployee']),
    async addEmployee() {
      try {
        this.employeeData.username = this.employeeData.nama
        this.isLoading = true;

        // Buat objek FormData untuk mengirim data formulir, termasuk file
        const formData = new FormData();

        // Tambahkan atribut formulir lainnya ke formData
        Object.keys(this.employeeData).forEach((key) => {
          if (key !== 'file' && key !== 'fileObject') {
            formData.append(key, this.employeeData[key]);
          }
        });

        // Pastikan file di-append terakhir untuk menghindari permasalahan
        formData.append('file', this.employeeData.fileObject);

        // Kirim formulir ke backend dengan metode POST
        await this.$store.dispatch('karyawan/createEmployee', formData); // Menggunakan axios secara langsung, pastikan Anda telah mengimpor axios

        this.$router.push({ name: 'DataKaryawan' });
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.getErrorAdd || 'Gagal Menambah data karyawan!',
        });
      }
    },
    onFileChange() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        // Validasi tipe file
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
          this.imageValidation.error = true;
          this.imageValidation.message = 'Tipe file tidak valid. Harap pilih file dengan tipe .png, .jpg, atau .jpeg.';
          return;
        }

        // Validasi ukuran file
        const maxSize = 5 * 1024 * 1024; // 5 MB dalam byte
        if (file.size > maxSize) {
          this.imageValidation.error = true;
          this.imageValidation.message = 'Ukuran file terlalu besar. Harap pilih file yang kurang dari 5 MB.';
          return;
        }


        // Mengonversi URL gambar menjadi objek File
        const imageUrl = URL.createObjectURL(file);
        this.employeeData.file = imageUrl;

        // Simpan objek File ke dalam data
        this.employeeData.fileObject = file;
      } else {
        this.employeeData.file = null;
        this.employeeData.fileObject = null;
        this.imageValidation.error = false;
        this.imageValidation.message = '';
      }
    },
    formatPhoneNumber() {
      let phoneNumber = this.employeeData.no_hp;

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

      this.employeeData.no_hp = phoneNumber;

      // Perform validation as needed
      if (phoneNumber.length !== 14 && phoneNumber.length !== 15) {
        this.phoneError = "Nomor telepon harus terdiri dari 14 atau 15 digit setelah +62.";
      } else {
        this.phoneError = "";
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  created() {
    this.fetchPosisi();
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
