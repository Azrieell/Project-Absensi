<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif; margin-bottom: 4%;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Karyawan</b></h1>
    </div>
  </div>

  <div class="container">
    <router-link @click="scrollToTop" to="/admin/datakaryawan/tambah">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        Tambah Karyawan
      </button>
    </router-link>
    <div>
      <div
        class="max-w-full max-h-full p-8 overflow-x-auto bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
        <table>
          <thead>
            <tr>
              <th>NIP</th>
              <th>NAMA</th>
              <th>TTL</th>
              <th>JENIS KELAMIN</th>
              <th>AGAMA</th>
              <th>ALAMAT</th>
              <th>NO TELEPON</th>
              <th>POSISI</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="karyawan in getkaryawan" :key="karyawan.uuid">
              
              <td>{{ karyawan.nip }}</td>
              <td>{{ karyawan.nama }}</td>
              <td>{{ karyawan.kota }} ,{{ karyawan.tgl_lahir }}</td>
              <td>{{ karyawan.jenis_kelamin }}</td>
              <td>{{ karyawan.agama }}</td>
              <td>{{ karyawan.alamat }}</td>
              <td>{{ karyawan.no_hp }}</td>
              <td>{{ karyawan.jabatan }}</td>
              <td><router-link @click="scrollToTop" :to="{name: 'SingleDataKaryawan', params: { uuid: karyawan.uuid}}">
              <span class="text-base underline text-blue-600">Detail</span>
              </router-link></td>
            
            </tr>
            <tr v-if="getkaryawan == 0">
              <td colspan="9" class="text-center font-medium text-2xl">Data not found</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
    </div>
  </div>

</template>


<style>
  table {
    font-family: 'Fredoka', sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
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
      ...mapGetters('karyawan', ['getkaryawan'])
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      ...mapActions('karyawan', ['fetchKaryawan'])
    },
    created() {
      this.fetchKaryawan();
    },
  }
</script>