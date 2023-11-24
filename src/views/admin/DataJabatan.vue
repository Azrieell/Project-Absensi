<template>
  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-500 rounded-xl shadow dark:bg-gray-600 dark:border-gray-600 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Data Jabatan</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <form @submit.prevent="submitposisi">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Jabatan</label>
            <input type="text" id="default-input" placeholder="Masukan Data Jabatan" v-model="Dataposisi.jabatan"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
            <br>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <span v-if="isLoading">Menyimpan...</span>
              <span v-else>Simpan</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Jabatan
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(posisi, index) in paginatedUsers" :key="posisi.uuid"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ posisi.jabatan }}
          </td>
          <td class="px-6 py-4">
            <button @click="deletePosition(posisi.id)"
              class="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 18 20">
                <path
                  d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
              </svg>
            </button>
          </td>
        </tr>
        <tr v-if="getPosisi.length === 0">
          <td colspan="3" class="text-center">Data jabatan tidak ditemukan</td>
        </tr>
      </tbody>
    </table>
  </div>
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
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  data() {
    return {
      Dataposisi: {
        jabatan: '',
      },
      isLoading: false,
      currentPage: 1,
      itemsPerPage: 5,
    }
  },
  computed: {
    ...mapGetters('posisi', ['getPosisi']),
    totalPages() {
      return Math.ceil(this.getPosisi.length / this.itemsPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.getPosisi.slice(start, end);
    },
  },
  methods: {
    ...mapActions('posisi', ['AddPosisi']),
    async submitposisi() {
      try {
        this.isLoading = true;
        const response = await this.$store.dispatch('posisi/AddPosisi', this.Dataposisi);
        this.fetchPosisi();
        Swal.fire(
          'Sukses!',
          'Berhasil Menambah jabatan ' + this.Dataposisi.jabatan,
          'success'
        )
        this.isLoading = false;
        return response
      } catch (error) {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    },
    ...mapActions('posisi', ['fetchPosisi']),
    ...mapActions('posisi', ['deletePosition']),
    async deletePosition(id) {
      try {
        await this.$store.dispatch('posisi/deletePosition', id);
        this.fetchPosisi();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
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
  beforeMount() {
    this.fetchPosisi();
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
}
</script>
