<template>
  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Akun</b></h1>
      <div class="pt-4">
        <form @submit.prevent="submituser">
          <div class="mb-6 pt-2">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Name</label>
            <input type="text" id="name" placeholder="Masukan Nama" v-model="userData.name"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
            <input type="text" id="email" placeholder="Masukan Email" v-model="userData.email"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
            <input type="password" id="password" placeholder="Masukan Password" v-model="userData.password"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Confirm
              Password</label>
            <input type="password" id="confirmpassword" placeholder="Konfirmasi Password" v-model="userData.confPassword"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <br>
            <button
            type="submit"
            :class="{ 'cursor-not-allowed opacity-50': isLoading }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Memuat...</span>
            <span v-else>Simpan</span>
          </button>
          </div>
        </form>
      </div>
    </div>
    <br>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div
        class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users" v-model="searchKeyword" @input="handleSearch" @focus="showDropdown = true"
            @blur="showDropdown = false">
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-16 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in paginatedUsers" :key="user.uuid"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img class="w-10 h-10 rounded-full"
                src="https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png" alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">{{ user.name }}</div>
                <div class="font-normal text-gray-500">{{ user.email }}</div>
              </div>
            </th>
            <td class="px-6 py-4">
              {{ user.role }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
              </div>
            </td>
            <td class="px-6 py-4">
              <router-link @click="scrollToTop" :to="{ name: 'EditDataAdmin', params: { uuid: user.uuid } }">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                  <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path
                      d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                  </svg>
                </button>
              </router-link>
              <button @click="deleteUser(user.uuid)" class="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 18 20">
                  <path
                    d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
              </button>
            </td>
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
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { debounce } from 'lodash';

export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        confPassword: '',
      },
      currentPage: 1,
      itemsPerPage: 5,
      searchKeyword: '',
      showDropdown: false,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters('user', ['getusers']),
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
    },
    filteredUsers() {
      // Sesuaikan ini dengan logika pencarian yang sesuai dengan data pengguna Anda
      return this.getusers.filter((user) => {
        return (
          user.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchKeyword.toLowerCase())
        );
      });
    },
  },
  methods: {
    ...mapActions('user', ['AddUser', 'deleteUser', 'fetchUser']),
    async submituser() {
      try {
        this.isLoading = true
        const response = await this.$store.dispatch('user/AddUser', this.userData);
        this.fetchUser();
        this.resetForm();
        Swal.fire(
          'Sukses!',
          'Berhasil Menambah user',
          'success'
        )
        this.isLoading = false
        return response;
      } catch (error) {
        this.isLoading = false
        console.error('Error adding user', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    },
    resetForm() {
      this.userData = {
        name: '',
        email: '',
        password: '',
        confPassword: '',
      };
    },
    async deleteUser(uuid) {
      try {
        await this.$store.dispatch('user/deleteUser', uuid);
        this.fetchUser();
      } catch (error) {
        console.error('Error deleting user', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete user!',
        });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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
    handleSearch: debounce(function () {
      this.fetchUser();
    }, 300),
  },
  beforeMount() {
    this.fetchUser();
  },
  created() {
    this.fetchUser();
  },
  mounted() {
    this.fetchUser();
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