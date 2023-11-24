<template>
  <div class="bg-gray-50 relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute top-8 sm:-top-20 left-0 w-full -mt-8">
      <path fill="#0099ff" fill-opacity="1"
        d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,266.7C672,267,768,277,864,272C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
      </path>
    </svg>
    <span class="absolute top-5 p- text-white sm:text-5xl sm:mt-5 text-3xl ml-8 mt-3 font-bold">Absensi</span>
  </div>
  <router-link to="/karyawan/profile">
    <button>
      <div class="absolute flex flex-row-reverse -top-0 right-0 mr-8 mt-5 sm:mt-12">
        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
          class="w-14 border-4 border-white rounded-full">
      </div>
    </button>
  </router-link>

  <!-- <nav
    class="flex-no-wrap relative flex w-full justify-between py-5 shadow-sm shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-5" style="background-color: #739072;">
    <div class="flex w-full flex-wrap sm:-ml-12 px-3">
      <div class="flex justify-between max-w-sm mx-auto" id="navbarSupportedContent1" data-te-collapse-item>
        <div class="flex max-w-sm mx-auto">
          <p>Absensi</p>
        </div>
      </div>
      <div class="flex flex-row-reverse mt-3 mr-5">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>  
      </div>
    </div>
  </nav> -->
  <!-- <div class="rounded-b-lg" style="background-color: #393E46;">
    <div class="flex">
      <div class="flex-none">
        <img class="inline-block h-20 w-20 ml-10 mt-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="">
      </div>
      <div class="flex-1 w-64 mt-3">
        <p class="ml-5 mt-12 text-xl font-bold text-white">Ronaldo</p>
        <p class="ml-5 font text-white font-medium">Guru</p>
        <div class="mb-12"></div>
      </div>
      <div class="flex flex-row-reverse mt-12 mr-10">
        <div class="mt-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
      </div>
    </div>
  </div> -->
  <router-view></router-view>
  <!-- <footer
    class="absolute sm:top-100 sm:mt-80 mt-80 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow sm:flex sm:items-center sm:justify-between sm:p-6"
    style="background-color: #393E46;">
    <div class="flex justify-center max-w-sm mx-auto">
      <span class="font-bold text-white ">Copyright by DAA</span>
    </div>
  </footer> -->
  <!-- This is an example component -->
  <!-- <div class=" bg-gray-900 mt-40">
    <div class="max-w-2xl mx-auto text-white py-10">
      <div class="text-center">
        <h3 class="text-3xl mb-3"> Download our fitness app </h3>
        <p> Stay fit. All day, every day. </p>
        <div class="flex justify-center my-10">
          <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8">
            <div class="text-left ml-3">
              <p class='text-xs text-gray-200'>Download on </p>
              <p class="text-sm md:text-base"> Google Play Store </p>
            </div>
          </div>
          <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8">
            <div class="text-left ml-3">
              <p class='text-xs text-gray-200'>Download on </p>
              <p class="text-sm md:text-base"> Apple Store </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
        <div class="order-1 md:order-2">
          <span class="px-2">About us</span>
          <span class="px-2 border-l">Contact us</span>
          <span class="px-2 border-l">Privacy Policy</span>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
  import Loading from '../components/Loading.vue';

  export default {
    name: 'KaryawanLayout',
    components: {
      Loading
    },
    data() {
      return {
        loading: false
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    },
    watch: {
      $route(to, from) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    mounted() {
      this.loading = false;
    }
  }
</script>