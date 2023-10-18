<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7 mb-10"><b>Tambah Akun Karyawan</b></h1>
    </div>
  </div>

  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Akun Karyawan</b></h1>

      <div class="pt-4">
          <div class="mb-6 pt-2">
            <form  @submit.prevent="createEmployee">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Username</label>
            <input type="text" required id="name" placeholder="Masukan Username" v-model="employeeData.username"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
            <input type="text" required id="email" placeholder="Masukan Email" v-model="employeeData.email"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password
              default</label>
            <input type="text" required id="email" placeholder="Password default" value="1234567" disabled
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <input type="text" class="hidden" value="admin" disabled>
            <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px; margin-top: 25px; margin-bottom: 15px;">
              <b>Isi
                Data Karyawan</b></h1>
            <div class="mb-6 pt-2">
              <label for="default-input"
                class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NIP</label>
              <input type="number" id="nip" required placeholder="Masukan NIP" v-model="employeeData.nip"
                class="bg-white border-gray-500 text-sm focus:ring-gray-300 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="default-input"
                class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NAMA</label>
              <input type="text" id="name" required placeholder="Masukan Nama" v-model="employeeData.nama"
                class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="default-input" required class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">TEMPAT
                TANGGAL LAHIR</label>
              <input type="date" id="ttl" required placeholder="Masukan Tempat Tanggal Lahir"
                v-model="employeeData.tmp_tgl_lahir"
                class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">JENIS
                KELAMIN</label>
              <select id="role" required v-model="employeeData.jenis_kelamin"
                class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
               <option value="" disabled>Pilih jenis kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
              <label for="default-input"
                class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">AGAMA</label>
              <input type="text" required id="agama" placeholder="Masukan Agama" v-model="employeeData.agama"
                class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="default-input"
                class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">ALAMAT</label>
              <input type="text" required id="alamat" placeholder="Masukan Alamat" v-model="employeeData.alamat"
                class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">NO
                TELEPHONE</label>
              <input type="number" required id="telp" placeholder="Masukan Nomor Telepon" v-model="employeeData.no_hp"
                class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
              <label for="role" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Pilih
                Jabatan</label>
              <select id="role" required v-model="employeeData.jabatan"
                class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
                <option value="" disabled>Pilih jabatan</option>
                <option v-for="jabatan in getPosisi" :value="jabatan" :key="jabatan.id" value="admin">
                  {{ jabatan.jabatan }}</option>
              </select>
              <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">PILIH
                FOTO</label>
              <input type="file" required ref="fileInput" @change="handleFileChange"
                class="bg-white border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
              <br>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Simpan
              </button>
            </div>
            </form>
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
    data() {
      return {
        employeeData: {
          username: '',
          email: '',
          password: '1234567',
          confPassword: '1234567',
          nip: '',
          nama: '',
          tmp_tgl_lahir: '',
          jenis_kelamin: '',
          agama: '',
          alamat: '',
          no_hp: '',
          jabatan: '',
          file: null
        }
      }
    },
    computed: {
      ...mapGetters('posisi', ['getPosisi'])
    },
    methods: {
      ...mapActions('karyawan',['AddKaryawan']),
      // async createEmployee() {
      //   const employeeData = {
      //     username: this.employeeData.username,
      //     email: this.employeeData.email,
      //     password: this.employeeData.password,
      //     confPassword: this.employeeData.confPassword,
      //     nip: this.employeeData.nip,
      //     nama: this.employeeData.nama,
      //     tmp_tgl_lahir: this.employeeData.tmp_tgl_lahir,
      //     jenis_kelamin: this.employeeData.jenis_kelamin,
      //     agama: this.employeeData.agama,
      //     alamat: this.employeeData.alamat,
      //     no_hp: this.employeeData.no_hp,
      //     jabatan: this.employeeData.jabatan,
      //     file: this.employeeData.file
      //   };
      //   const success = await this.AddKaryawan(employeeData);
      //   if (success) {
      //     this.$router.push({
      //       name: 'DataKaryawan'
      //     });
      //   }else {
      //       Swal.fire({
      //         icon: 'error',
      //         title: 'Oops...',
      //         text: 'gagal menambahkan data',
      //         footer: '<a href="">Why do I have this issue?</a>'
      //       });

      //   }
      // },
      // Method untuk mengirimkan data pegawai ke Vuex action
      createEmployee() {
        this.$store.dispatch('karyawan/AddKaryawan', this.employeeData);
      },
      // Method untuk meng-handle perubahan pada input file
      handleFileChange(event) {
        this.employeeData.file = event.target.files[0];
      },
      ...mapActions('posisi', ['fetchPosisi'])
    },
    created() {
      this.fetchPosisi();
    }
  }
</script>