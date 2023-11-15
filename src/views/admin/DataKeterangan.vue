<template>
  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12"
    >
      <h1 class="text-2xl font-semibold mb-6">Daftar Informasi</h1>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left border border-gray-300">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="py-2 px-4 border-b">ID</th>
              <th class="py-2 px-4 border-b">Tanggal</th>
              <th class="py-2 px-4 border-b">Nama</th>
              <th class="py-2 px-4 border-b">Keterangan</th>
              <th class="py-2 px-4 border-b">Alasan Tidak Hadir</th>
              <th class="py-2 px-4 border-b">Foto Bukti</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="information in paginatedInformation" :key="information.id"
              class="hover:bg-gray-100 dark:hover:bg-gray-600">
              <td class="py-2 px-4 border-b">{{ information.id }}</td>
              <td class="py-2 px-4 border-b">{{ information.tgl_keterangan }}</td>
              <td class="py-2 px-4 border-b">{{ information['user'].name }}</td>
              <td class="py-2 px-4 border-b">{{ information.keterangan }}</td>
              <td class="py-2 px-4 border-b">{{ information.alasan }}</td>
              <td class="py-2 px-4 border-b"><img :src="information.url" alt="" class="w-20 h-20"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination controls -->
      <div class="flex justify-between items-center mt-4">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Previous Page
        </button>
        <div>{{ currentPage }} / {{ totalPages }}</div>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Next Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('information', ['getInformation']),
    totalPages() {
      return Math.ceil(this.getInformation.length / this.perPage);
    },
    paginatedInformation() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.getInformation.slice(start, end);
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5,
    };
  },
  methods: {
    ...mapActions('information', ['fetchInformation']),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  created() {
    this.fetchInformation();
  },
  beforeMount() {
    this.fetchInformation();
  },
};
</script>