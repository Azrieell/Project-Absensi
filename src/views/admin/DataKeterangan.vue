<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Keterangan</b></h1>
    </div>
  </div>
<div class="container">
  <div
    class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <td>Tanggal</td>
          <th>Nama</th>
          <th>Keterangan</th>
          <th>Alasan Tidak Hadir</th>
          <th>Foto Bukti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="information in getInformation" :key="information.id">
          <td>{{ information.id }}</td>
          <td>{{ information.tgl_keterangan}}</td>
          <td>{{ information['user'].name }}</td>
          <td>{{ information.keterangan }}</td>
          <td>{{ information.alasan }}</td>
          <td><img :src="information.url" alt="" srcset="" class="w-32"></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters('information',['getInformation'])
  },
  methods:{
    ...mapActions('information',['fetchInformation'])
  },
  created() {
    this.fetchInformation();
  },
  beforeMount(){
    this.fetchInformation();
  }
}
</script>