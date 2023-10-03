<template>
  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Edit Akun Admin</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
          <input type="text" id="default-input" placeholder="Masukan Email"
            class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
          <label for="default-input"
            class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
          <input type="password" id="default-input" placeholder="Masukan Password"
            class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
          <br>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
}
</script>