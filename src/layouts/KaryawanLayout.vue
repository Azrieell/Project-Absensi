<template>
  <div class="fullscreen-container">
     <!-- SVG Path (tidak diubah) -->
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="top-8 sm:-top-20 left-0 w-full sm:-mt-16 wave-svg">
       <path fill="#0099ff" fill-opacity="1"
         d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,266.7C672,267,768,277,864,272C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
       </path>
     </svg>
     <!-- Router Link ke HomeKaryawan (tidak diubah) -->
     <router-link :to="{name: 'HomeKaryawan'}">
       <span class="absolute top-5 text-white sm:text-6xl sm:mt-2 text-3xl ml-8 -mt-2 font-bold  responsive-text">Absensi  <p class="sm:text-lg text-sm  responsive-text">{{ company.nama }}</p></span>
     </router-link>
     <!-- Router Link ke /karyawan/profile (tidak diubah) -->
     <router-link to="/karyawan/profile">
      <button v-if="$route.path === '/karyawan/profile'" @click="" class="absolute flex flex-row-reverse -top-0 right-0 mr-8 mt-5 sm:mt-16 transition-all responsive-profile xl:hidden">
     
      </button>
      <button v-else>
        <!-- Profile button as before -->
        <div class="absolute flex flex-row-reverse -top-0 right-0 mr-8 mt-2 sm:mt-16 transition-all responsive-profile">
          <img :src="employee.url || 'https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png'"
               class="w-14 h-14 sm:w-20 sm:h-20 border-4 border-white rounded-full">
        </div>
      </button>
    </router-link>
     <!-- Transisi untuk Router View -->
     <router-view v-slot="{ Component }">
       <transition name="fade" mode="out-in">
         <component :is="Component" />
       </transition>
     </router-view>
     <!-- Footer -->
     <footer class="text-white text-center py-3 mt-10" style="background-color: #0099ff;">
       <!-- Footer Links -->
       <div class="flex justify-center space-x-4">
         <!-- Link GitHub Developer -->
         <a href="https://github.com/USERNAME" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github text-lg"></i>
         </a>
         
         <!-- Link Kontak Developer -->
         <a href="mailto:developer@example.com">
           <i class="fas fa-envelope text-lg"></i>
         </a>
 
         <!-- Link Kontak Perusahaan -->
         <a href="tel:+62123456789">
           <i class="fas fa-phone text-lg"></i>
         </a>
       </div>
 
       <!-- Copyright Text -->
       <p class="mt-2 text-sm">&copy; 2023 Absensi App. All rights reserved.</p>
     </footer>
   </div>
 </template>
 <script>
   import { mapActions, mapGetters } from 'vuex';
 
   export default {
     name: 'KaryawanLayout',
     computed: {
       ...mapGetters('userkaryawan', ['getUserKaryawan']),
       employee() {
         return this.getUserKaryawan;
       },
       company() {
       return this.$store.state.company.company;
     }
     },
     methods: {
       ...mapActions('userkaryawan', ['fetchUserKaryawan']),
       ...mapActions('company', ['fetchCompany']),
       scrollToTop() {
         window.scrollTo(0, 0);
       },
     },
     created() {
       this.fetchUserKaryawan();
       this.fetchCompany();
     },
   };
 </script>
 <style scoped>
 /* Add this style block to your component's template */
 .fade-enter-active, .fade-leave-active {
   transition: opacity 0.5s;
 }
 .fade-enter, .fade-leave-to {
   opacity: 0;
 }
 
 </style>