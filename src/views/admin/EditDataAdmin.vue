<template>
  <div class="container">
    <div v-if="user"
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Edit Akun Admin</b></h1>
      <div class="pt-4">
        <form @submit.prevent="updateUser">
          <div class="mb-6 pt-2">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Name</label>
            <input type="text" id="name" placeholder="Masukan Nama" v-model="userDataEdit.name"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
            <input type="text" id="email" placeholder="Masukan Email" v-model="userDataEdit.email"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
            <input type="password" id="password" placeholder="Masukan Password" v-model="userDataEdit.password"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Confirm
              Password</label>
            <input type="password" id="confirmpassword" placeholder="Konfirmasi Password"
              v-model="userDataEdit.confPassword"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Role</label>
            <select id="role" required v-model="userDataEdit.role"
              class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
              <option value="" disabled>Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <br>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      <span class="text-3xl font-semibold text-center">
        Data Not found
      </span>
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
      userDataEdit: {
        name: null,
        email: null,
        password: null,
        confPassword: null,
      }
    }
  },
  computed: {
    ...mapGetters('user', [ 'getError', 'getSingleById']),
    user() {
      return this.getSingleById(this.$route.params.uuid);
    },
  },
  methods: {
    ...mapActions('user', ['fetchUser', 'updateUser', 'fetchUserById']),
    async updateUser(uuid) {
      try {
        await this.$store.dispatch('user/updateUser', uuid, this.userDataEdit).then(() => {
          this.$router.push({ name: 'DataUser' });
        });;
        Swal.fire(
          'Berhasil mengedit user!',
          'You clicked the button!',
          'success'
        )
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.getError || 'gagal mengedit user!',
        })
      }
    },
    loadData() {
      const user = this.getSingleById(this.$route.params.uuid);
      this.userDataEdit.name = user.name;
      this.userDataEdit.email = user.email;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    watch: {
      '$route.params.uuid': 'loadData',
    },
  },
  mounted() {
    const useruuid = this.$route.params.uuid;
    this.fetchUserById(useruuid);
    this.loadData();
  }
}
</script>