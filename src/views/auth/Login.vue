<template>
  <div class="flex flex-wrap mt-4">
  <div class="flex w-full flex-col md:w-1/2">
    
    <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p class="text-left text-3xl font-bold">Welcome to Comet <span class="text-sky-400">Apparel</span></p>
      <p class="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
      <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt /> Log in with Google</button>
      <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
      </div>
      <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="performLogin">
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="text" v-model="email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email or username" required />
          </div>
        </div>
        <div class="mb-12 flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password"  v-model="password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" required/>
          </div>
        </div>
        <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-lime-400 to-sky-400 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
      </form>
      <div class="py-12 text-center">
        <p class="whitespace-nowrap text-gray-600">
          Don't have an account?
          <a href="/register" class="underline-offset-4 font-semibold text-gray-900 underline">Register for free.</a>
        </p>
      </div>
    </div>
  </div>
  <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
    <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
      <p class="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
      <p class="mb-4 text-3xl font-semibold">John Elmond</p>
      <p class="">Founder, Emogue</p>
      <p class="mb-7 text-sm opacity-70">Web Design Agency</p>
    </div>
    <img class="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="#" />
  </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
      return {
          email: '',
          password: '',
      };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated']),
  },
  methods: {
      ...mapActions('auth', ['login']),
      async performLogin() {
          const credentials = {
              email: this.email,
              password: this.password,
          };

          const success = await this.login(credentials);

          if (success && this.isAuthenticated) {
              // Redirect to the desired route on successful login
              this.$router.push('/beranda');
          } else {
            // handle login error
            if (this.loginError) {
              
            } else {
              alert("Login Failed");
            }
              
          }
      },
  },
};
</script>