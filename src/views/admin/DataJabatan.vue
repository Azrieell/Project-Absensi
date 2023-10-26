<template>
  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Jabatan</b></h1>
    </div>
  </div>


  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-500 rounded-xl shadow dark:bg-gray-600 dark:border-gray-600 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Data Jabatan</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <form @submit.prevent="submitposisi">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Jabatan</label>
            <input type="text" id="default-input" placeholder="Masukan Data Jabatan" v-model="Dataposisi.jabatan"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
            <br>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Simpan
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

  <div class="p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12 pl-12">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>JABATAN</th>
          <th>HAPUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="posisi in getPosisi" :key="posisi.id">
          <td>{{ posisi.id }}</td>
          <td>{{ posisi.jabatan }}</td>
          <td><button @click="deletePosition(posisi.id)"
              class="bg-red-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3"
                viewBox="0 0 16 16">
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </button></td>
        </tr>
        <tr v-if="getPosisi == 0">
          <td colspan="3" class="text-center">data not found</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style>

</style>

<script>
  import {
    mapActions,
    mapGetters,
    mapState
  } from 'vuex';

  export default {
    data() {
      return {
        Dataposisi: {
          jabatan: '',
        }
      }
    },
    computed: {
      ...mapGetters('posisi', ['getPosisi']),
    },
    methods: {
      ...mapActions('posisi', ['AddPosisi']),
      async submitposisi() {
        try {
          const response = await this.$store.dispatch('posisi/AddPosisi', this.Dataposisi);
          return response
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      },
      ...mapActions('posisi', ['fetchPosisi']),
      ...mapActions('posisi',['deletePosition']),
      async deletePosition(id) {
      try {
        await this.$store.dispatch('posisi/deletePosition', id);
        Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
      } catch (error) {
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>'
})
      }
    },
    },
    beforeMount() {
      this.fetchPosisi();
    },
    created() {
      this.fetchPosisi();
    },
  }
</script>