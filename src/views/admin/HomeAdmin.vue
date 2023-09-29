<template>
  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Beranda</b></h1>
    </div>
  </div>

  <!-- Border/kotak -->
  <div style="width: 100%; height: 180%; background-color: #364F6B; margin-top: 5%; border-radius: 10px;">
    <!-- Akhir Border/Kotak -->

    <!-- Judul -->
    <div style="padding: 20px;">  
      <h1 class="text-2xl ml-5 mb-5 text-white" style="font-family: 'Fredoka', sans-serif;">Informasi Perusahaan</h1>
      <hr>
    </div>
    <!-- Akhir Judul -->

    <!-- Content -->
    <div class="container mx-auto p-5">
      <div class="grid grid-cols-3 gap-4" style="margin-left: 40px; font-family: 'Fredoka', sans-serif;">
        <div class="">
          <h2 style="margin-left: 100px; color: white;" class="text-2xl">Jumlah Karyawan</h2>
          <!-- Icon Person -->
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-people-fill"
              viewBox="0 0 16 16">
              <path
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </div>
          <!-- Akhir Icon Person -->
        </div>
        <div class="">
          <h2 style="margin-left: 100px; font-family: 'Fredoka', sans-serif; color: white;" class="text-2xl">Jumlah
            Hadir</h2>
          <!-- Icon -->
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
              class="bi bi-person-raised-hand" viewBox="0 0 16 16">
              <path
                d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z" />
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            </svg>
          </div>
          <!-- Icon -->
        </div>
        <div class="">
          <h2 style="margin-left: 100px; font-family: 'Fredoka', sans-serif; color: white;" class="text-2xl">Status
            Perusahaan</h2>
          <!-- Icon -->
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" fill="currentColor" class="bi bi-building"
              viewBox="0 0 16 16">
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
              <path
                d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
            </svg>
          </div>
          <!-- Akhir Icon -->
        </div>
      </div>
    </div>
    <!-- Akhir Content -->
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
</style>