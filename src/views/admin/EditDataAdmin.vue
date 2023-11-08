<template>
  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Edit Akun Admin</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Nama</label>
          <input type="text" id="name" placeholder="Masukan Nama" v-model="userData.name"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
          <input type="text" required id="email" placeholder="Masukan Email" v-model="userData.email"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input"
            class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
          <input type="password" required id="password" placeholder="Masukan Password" v-model="userData.password"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Konfirmasi
            Password</label>
          <input type="password" required id="confpassword" placeholder="Konfirmasi Password"
            v-model="userData.confPassword"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <br>
          <button @click="updateUser(user.useruuid)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Simpan
          </button>
        </div>
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
    props:["useruuid"],
    data() {
      return {
        userData: {
          name: '',
          email: '',
          password: '',
          confPassword: '',
        }
      }
    },
    computed: {
      ...mapGetters('user', ['getuser', 'getError']),
      ...mapGetters("user", ["getSingleById"]),
      user() {
        return this.getSingleById(this.$route.params.uuid);
      },
    },
    methods: {
      ...mapActions('user', ['fetchUser', 'updateUser', 'fetchUserById', 'getSingleById']),
      updatedUser(){
        this.updateUser(this.userData)
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    },
    created() {
      this.fetchUser();
      this.userData.name = this.getSingleById(this.$route.params.uuid).name;
      this.userData.email = this.getSingleById(this.$route.params.uuid).email;
    },
    mounted() {
      const useruuid = this.$route.params.uuid;
      console.log("Useruuid:", useruuid);
      this.fetchUserById(useruuid);
      this.$store.dispatch("user/updateUser", this.useruuid)
    }
  }
</script>