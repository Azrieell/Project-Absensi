<template>
  <div class="mt-5">
    <div class="relative group">
      <div class="w-full h-24 bg-pink-500 rounded-2xl">
        <div class="container">
          <h1 class="text-3xl text-white pl-12 pt-7 font-bold">{{ getPageName }}</h1>
        </div>
      </div>
      <div class="absolute top-0 right-0 mt-4 mr-4">
        <div class="mt-4" style="position: relative;">
          <button id="dropdownUserAvatarButton" @click="toggleDropdown"
            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full"
              src="https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png" alt="user photo">
          </button>

          <div v-if="isDropdownOpen" id="dropdownAvatarName"
            class="bg-gray-50 -mx-28 divide-y divide-gray-200 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            :style="dropdownStyle">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div class="font-medium">{{ me.name }}</div>
              <div class="truncate">{{ me.email }}</div>
            </div>
            <div class="py-2">
              <li class="flex w-full justify-between text-gray-800 mx-3 hover:text-gray-300 cursor-pointer items-center">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fill-rule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg>
                    <button @click="logout" class="group mx-2" :disabled="isLoading">
                      <div role="status" v-if="isLoading">
                        <svg aria-hidden="true"
                          class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                        </svg>
                      </div>
                      <span v-else>Sign Out</span>
                    </button>
                </a>
              </li>
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
      isDropdownOpen: false,
      isLoading: false,
      dropdownStyle: {
        position: "absolute",
        top: "40px", // Sesuaikan posisi atas sebagaimana diperlukan
        left: "0", // Sesuaikan posisi kiri sebagaimana diperlukan
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    ...mapActions('auth', ['fetchMe']),
    async logout() {
      try {
        this.isLoading = true;
        // Memanggil aksi logout dan menunggu selesai
        await this.$store.dispatch('auth/logout');
        // Menghentikan animasi loading setelah selesai
        this.isLoading = false;
        // Mengarahkan pengguna ke halaman login
        this.$router.push({ name: 'Login' });
      } catch (error) {
        // Menangani kesalahan jika logout gagal
        console.log(error.message);
        // Memberitahu pengguna bahwa logout gagal
        throw error;
      }
    },
  },
  computed: {
    getPageName() {
      // Mengambil nama route dari route saat ini
      const name = this.$route.name;

      // Jika tidak ada nama route, Anda dapat memberikan teks default
      return name ? name : 'Teks Default';
    },
    ...mapGetters('auth', ['getMe']),
    me() {
      return this.getMe;
    },
  },
  created() {
    // Memanggil aksi untuk mengambil data pengguna saat komponen dibuat
    this.fetchMe();
  },
};
</script>