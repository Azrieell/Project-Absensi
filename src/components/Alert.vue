<template>
    <div v-if="show" class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      <div
        x-data="{ show: true }"
        x-init="setTimeout(() => show = false, 1000)"
        x-show="show"
        class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Icon atau avatar pesan alert di sini -->
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">{{ message }}</p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                @click="show = false"
                class="inline-flex text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Tutup</span>
                <!-- Icon tombol tutup alert di sini -->
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'isAlert',
    props: {
      show: Boolean, // Properti untuk mengontrol apakah alert ditampilkan
      message: String, // Properti untuk pesan alert
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan Anda di sini */
  </style>
  