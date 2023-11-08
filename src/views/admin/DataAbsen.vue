<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif; margin-bottom: 4%;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Absensi</b></h1>
    </div>
  </div>

<div class="container">
  <div
    class="max-w-full max-h-full p-8  bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAMA</th> 
          <th>Absen Kedatangan</th>
          <th>Absen Pulang</th>
          <th>Absen Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="presence in getPresence" :key="presence.id">
          <td>{{ presence.id }}</td>
          <td>{{ presence['user'].name }}</td>
          <td>{{ presence.tgl_absen }} {{ presence.masuk }}</td>
          <td>{{ presence.tgl_absen }} {{ presence.pulang }}</td>
          <td><img :src="presence.url" alt="" srcset="" class="w-32"></td>
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
    ...mapGetters('presence',['getPresence'])
  },
  methods:{
    ...mapActions('presence',['fetchPresence'])
  },
  created() {
    this.fetchPresence();
  },
  beforeMount(){
    this.fetchPresence();
  }
}
</script>