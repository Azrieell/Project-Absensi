<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-sm w-full">
        <div class="p-10" style="margin-left: 118px; margin-right: 112px;"></div>
        <div class="border border-collapse border-gray-400 shadow-md rounded-3xl p-8 ">
          <div class="text-center">
            <i class="fas fa-key text-4xl text-indigo-600"></i>
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <form class="mt-8 space-y-6" @submit.prevent="resetPassword">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="my-4">
                <label for="email" class="">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  v-model="email"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span v-if="isLoading">Resetting...</span>
                <span v-else>Reset Password</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        email: '',
        isLoading: false,
      };
    },
    methods: {
      ...mapActions('auth', ['resetPassword']),
      async resetPassword() {
        this.isLoading = true;
  
        try {
          // Panggil aksi reset password pada store
          const success = await this.resetPassword({
            email: this.email,
          });
  
          // Reset form setelah berhasil
          if (success) {
            this.email = '';
          }
        } catch (error) {
          // Handle error
          console.error(error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  