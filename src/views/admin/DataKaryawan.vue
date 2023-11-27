<template>
  <div class="container">
    <router-link @click="scrollToTop" to="/admin/datakaryawan/tambah">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 mt-5">
        Tambah Karyawan
      </button>
    </router-link>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search"
            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Karyawan" v-model="searchKeyword" @input="handleSearch" @focus="showDropdown = true"
            @blur="showDropdown = false">
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              NIP
            </th>
            <th scope="col" class="px-6 py-3">
              NAMA
            </th>
            <th scope="col" class="px-6 py-3">
              TEMPAT & TANGGAL LAHIR
            </th>
            <th scope="col" class="px-6 py-3">
              JENIS KELAMIN
            </th>
            <th scope="col" class="px-6 py-3">
              POSISI
            </th>
            <th scope="col" class="px-16 py-3">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(karyawan, index) in paginatedKaryawan" :key="karyawan.uuid"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">{{ karyawan.nip }}</td>
            <td class="px-6 py-4">{{ karyawan.nama }}</td>
            <td class="px-6 py-4">{{ karyawan.kota }}, {{ karyawan.tgl_lahir }}</td>
            <td class="px-6 py-4">{{ karyawan.jenis_kelamin }}</td>
            <td class="px-6 py-4">{{ karyawan.jabatan }}</td>
            <td class="px-6 py-4">
              <button @click="toDetailEmployee(karyawan)"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
                <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 16 3">
                  <path
                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
                <button @click="toEditEmployee(karyawan)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566 .713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path
                      d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                  </svg>
                </button>
            </td>
          </tr>
          <tr v-if="getkaryawan.length === 0">
            <td colspan="10" class="text-center font-medium text-2xl">Data not found</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination controls -->
    <div class="flex justify-between items-center mt-4">
      <button @click="changePage('prev')" :disabled="currentPage === 1"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
        Previous Page
      </button>
      <div>{{ currentPage }} / {{ totalPages }}</div>
      <button @click="changePage('next')" :disabled="currentPage === totalPages"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      searchKeyword: '',
      showDropdown: false,
    };
  },
  computed: {
    ...mapGetters('karyawan', ['getkaryawan']),
    employee() {
      return this.getkaryawan.uuid;
    },
    totalPages() {
      return Math.ceil(this.searchResults.length / this.perPage);
    },
    paginatedKaryawan() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.searchResults.slice(start, end);
    },

    searchResults() {
      return this.getkaryawan.filter((karyawan) => {
        const nip = karyawan.nip ? karyawan.nip.toString() : '';
        const nama = karyawan.nama ? karyawan.nama.toLowerCase() : '';
        const jabatan = karyawan.jabatan ? karyawan.jabatan.toLowerCase() : '';
        const email = karyawan.email ? karyawan.email.toLowerCase() : '';

        return (
          nip.includes(this.searchKeyword.toLowerCase()) ||
          nama.includes(this.searchKeyword.toLowerCase()) ||
          jabatan.includes(this.searchKeyword.toLowerCase()) ||
          email.includes(this.searchKeyword.toLowerCase())
        );
      });
    },

  },
  methods: {
    toDetailEmployee(karyawan) {
      this.scrollToTop();
      this.$router.push({ name: 'SingleDataKaryawan', params: { uuid: karyawan.uuid } });
    },
    toEditEmployee(karyawan) {
      this.scrollToTop();
      this.$router.push({ name: 'EditDataKaryawan', params: { uuid: karyawan.uuid } });
    },
    nextPage() {
      this.changePage('next');
    },
    prevPage() {
      this.changePage('prev');
    },
    changePage(direction) {
      if (direction === 'next' && this.currentPage < this.totalPages) {
        this.currentPage++;
      } else if (direction === 'prev' && this.currentPage > 1) {
        this.currentPage--;
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleSearch: debounce(function () {
      // Menampilkan atau menyembunyikan dropdown berdasarkan apakah ada hasil pencarian
      this.showDropdown = this.searchKeyword.length > 0;

      // Panggil aksi Vuex untuk melakukan pencarian (mungkin perlu disesuaikan)
      this.fetchKaryawan();
    }, 300),
    ...mapActions('karyawan', ['fetchKaryawan']),
  },
  created() {
    this.fetchKaryawan();
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

<style>
/* Style untuk dropdown pencarian */
.search-results {
  position: absolute;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
}

.search-result {
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-result:hover {
  background-color: #f3f4f6;
}</style>
