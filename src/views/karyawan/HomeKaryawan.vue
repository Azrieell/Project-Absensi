<template>
  <div class="bg-gray-50 rounded-t-lg w-90 h-30 p-4 ml-2 mr-2">
    <!-- Button-->
    <div
      class="mx-auto grid p-5 gap-y-3 grid-cols-3 sm:grid-cols-3 text-center overflow-hidden shadow-xl rounded-lg mb-10">
      <div class="group cursor duration-200 hover:-translate-y-4">
        <div>
          <router-link to="/karyawan/absenkaryawan">
            <button className="text-rose-600 r-500 mb-4 mt-5">
              <a href="/absenkaryawan">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </a>
            </button>
          </router-link>
          <br>
          <b class="ml-1">Absen</b>
        </div>
      </div>

      <div class="group cursor duration-200 hover:-translate-y-4">
        <div>
          <router-link to="/karyawan/sakitkaryawan">
            <button className="text-rose-600 mb-4 mt-5">
              <a href="/karyawan/sakitkaryawan">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </a>
            </button>
          </router-link>
          <br>
          <b>Sakit</b>
        </div>
      </div>

      <div class="group cursor duration-200 hover:-translate-y-4">
        <div>
          <button className="text-rose-600 mb-4 mt-5">
            <a href="/karyawan/izinkaryawan">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </a>
          </button>
          <br>
          <b>Izin</b>
        </div>
      </div>
    </div>
    <!-- Akhir Button -->


    <!-- Jadwal Kedatangan -->
    <div class="container mx-1">
      <div class="grid grid-cols-2 gap-2 items-center mt-3">
      <div class="max-w-xs bg-rose-500 rounded-xl overflow-hidden shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center text-white">Jam Kedatangan</div>
          <p class="text-white text-center text-xl">
            07:00
          </p>
        </div>
      </div>
      <div class="max-w-xs rounded-xl overflow-hidden shadow-xl" style="background-color: #0099ff;">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center text-white">Jam pulang</div>
          <p class="text-white text-center text-xl">
            17:00
          </p>
        </div>
      </div>
    </div>
    </div>
    <!-- Akhir Jadwal Kedatangan -->


    <!-- Card Keterangan -->
    <p class="mt-12 ml-3 text-xl font-bold">Keterangan</p>
    <div class="grid grid-cols-3 gap-3 items-center mt-3">
      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Hadir</div>
          <p class="text-gray-700 text-center">
            1 hari
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Izin</div>
          <p class="text-gray-700 text-center">
            1 Hari
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Sakit</div>
          <p class="text-gray-700 text-base text-center">
            1 Hari
          </p>
        </div>
      </div>
    </div>
    <!-- Akhir Card Keterangan -->

    <!-- Artikel -->
    <p class="mt-12 ml-3 text-xl font-bold">Artikel</p>
    <p class="ml-3 mt-2 text-gray-400">Baca artikel dari perusahaan</p>
    <div class="flex flex-col bg-white m-auto p-auto">
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap md:ml-15 mt-5">
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                  <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tailwind card
                  </h5>
                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button data-ripple-light="true" type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Akhir Artikel -->

    <p class="ml-3 text-xl font-bold">Informasi</p>
    <p class="ml-3 mt-2 text-gray-400">Daftar Informasi Perusahaan</p>
    <div class="grid grid-cols-3 text-center">
      <div class="text-rose-600 mt-8 ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle"
          viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <div class="mt-8">
        <p class="text-medium font-bold">23 Mei 2023</p>
        <p>Libur untuk siswa karena guru ada kegiatan rapat</p>
      </div>
    </div>
    <hr class="mt-5 my-6 border-gray-400 sm:mx-auto">
  </div>
  <!-- <div style="margin-left: 3%;">
    <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mr-10 mt-10">
      <div
        class="mr-10 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        style="background-color: #393E46;">
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-white">
            Absen Masuk
          </h5>
          <b class="mb-4 text-white">
            Belum Absen
          </b>
        </div>
      </div>


      <div
        class="block ml-10 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        style="background-color: #00ADB5;">
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-white">
            Absen Pulang
          </h5>
          <b class="mb-4 text-white">
            Belum Absen
          </b>
        </div>
      </div>
    </div> -->




  <!-- <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-3 mr-7 mt-20">
      <div class="mr-4 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        style="background-color: #EEEEEE;">
        <div class="grid grid-cols-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-12 h-12 ml-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 "
            style="margin-left: -50%;">
            Hadir
            <br>
            0 hari
          </h5>
        </div>
      </div>

      <div class="mr-4 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        style="background-color: #EEEEEE;">
        <div class="grid grid-cols-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-12 h-12 ml-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>

          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 "
            style="margin-left: -50%;">
            Izin
            <br>
            0 hari
          </h5>
        </div>
      </div> -->

  <!-- <div class="mr-4 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        style="background-color: #EEEEEE;">
        <div class="grid grid-cols-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-12 h-12 ml-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 "
            style="margin-left: -50%;">
            Sakit
            <br>
            0 hari
          </h5>
        </div>
      </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<style>
  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
</style>