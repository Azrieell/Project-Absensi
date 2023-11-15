<template>
  <div class="container mx-auto mt-12">
    <div class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
      <h1 class="text-2xl mb-4 font-semibold">Daftar Kehadiran</h1>

      <div class="overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Absen Kedatangan</th>
              <th>Absen Pulang</th>
              <th>Absen Foto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="presence in paginatedPresence" :key="presence.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td>{{ presence.id }}</td>
              <td>{{ presence['user'].name }}</td>
              <td>{{ presence.tgl_absen }} {{ presence.masuk }}</td>
              <td>{{ presence.tgl_absen }} {{ presence.pulang }}</td>
              <td class="py-2 px-4 border-b"><img :src="presence.url" alt="" class="w-20 h-20"></td>
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
  data() {
    return {
      perPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters('presence', ['getPresence']),
    totalPages() {
      return Math.ceil(this.getPresence.length / this.perPage);
    },
    paginatedPresence() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.getPresence.slice(start, end);
    },
  },
  methods: {
    ...mapActions('presence', ['fetchPresence']),
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
    this.fetchPresence();
  },
  beforeMount() {
    this.fetchPresence();
  },
};
</script>
