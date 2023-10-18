<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">

    <div class="max-w-sm w-full">
      <div class="p-10" style="margin-left: 118px ;
    margin-right: 112px;">
        <!-- <div class="absolute flex items-center justify-center bg-emerald-600 w-16 h-16 rounded-3xl">
          <svg class="w-[47px] h-[42px] text-white dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
            <path
              d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </div> -->
      </div>
      <div class="border border-collapse border-gray-400 shadow-md rounded-3xl p-8 ">
        <div class="text-center">
          <i class="fas fa-user-circle text-4xl text-indigo-600"></i>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login Absensi
        </h2>
        <form class="mt-8 space-y-6" @submit.prevent="performLogin">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="my-4">
              <label for="email" class="">Email address</label>
              <input id="email" name="email" type="email" autocomplete="email" required
                class="appearance-none rounded relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address" v-model="email">
            </div>
            <div>
              <label for="password" class="">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="appearance-none rounded relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" v-model="password">
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
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
        email: '',
        password: ''
      };
    },
    computed: {
      ...mapGetters('auth', ['loginError', 'isAuthenticated', 'isError']),
    },
    methods: {
      ...mapActions('auth', ['login']),
      async performLogin() {
          const credentials = {
              email: this.email,
              password: this.password,
          };

          const success = await this.login(credentials);
          const role = localStorage.getItem('role');
          if (success && this.isAuthenticated && role === 'admin') {
            this.$router.push({name: 'HomeAdmin'});
          } else if (success && this.isAuthenticated && role === 'user') {
            this.$router.push({name: 'HomeKaryawan'});
          } else {
            // handle login error
            if (this.loginError){
                
            }else{
              this.alertShow = true
            }
              
          }

      },
    },
  };
</script>