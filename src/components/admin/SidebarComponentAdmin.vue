<template>
  <!-- sidebar -->

  <div class="w-full h-full">
    <dh-component>
      <div class="flex flex-no-wrap">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
        <div style="min-height: 1200px"
          class="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
          <div class="fixed">
          <div class="px-8">
            <div class="h-16 w-full flex items-center">
              <h2 class="font-medium text-white text-4xl p-6 mx-auto mt-12" style="font-family: 'Fredoka', sans-serif;">
                <b>Admin</b></h2>
            </div>
            <ul class="mt-12">
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-9">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-house-door" viewBox="0 0 16 16">
                    <path
                      d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                  </svg>
                  <router-link to="/beranda">
                    <span class="text-xl ml-3 text-white hover:text-gray-300"
                      style="font-family: 'Fredoka', sans-serif;">Beranda</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-bar-chart" viewBox="0 0 16 16">
                    <path
                      d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                  </svg>
                  <router-link to="/datakaryawan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Karyawan</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-person" viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <router-link to="/datauser">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data User</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-card-checklist" viewBox="0 0 16 16">
                    <path
                      d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path
                      d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <router-link to="/datajabatan">
                    <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Jabatan</span>
                  </router-link>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-calendar3" viewBox="0 0 16 16">
                    <path
                      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                    <path
                      d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Absen</span>
                </a>
                <!-- <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25
                </div> -->
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center mb-8">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-window-dock" viewBox="0 0 16 16">
                    <path
                      d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    <path
                      d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z" />
                  </svg>
                  <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Data Keterangan</span>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center">
                <a href="javascript:void(0)"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white mb-9">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">Perusahaan</span>
                </a>
              </li>
              <li class="flex w-full justify-between text-white hover:text-gray-300 cursor-pointer items-center">
                <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fill-rule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg>
                  <span class="text-xl ml-3" style="font-family: 'Fredoka', sans-serif;">LogOut</span>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>


        <div class="">

        </div>

        <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">

          <router-view></router-view>
          <!-- </div> -->
        </div>
      </div>
    </dh-component>
  </div>
</template>

<script>
  var sideBar = document.getElementById("mobile-nav");
  var openSidebar = document.getElementById("openSideBar");
  var closeSidebar = document.getElementById("closeSideBar");
  // sideBar.style.transform = "translateX(-260px)";

  function sidebarHandler(flag) {
    if (flag) {
      sideBar.style.transform = "translateX(0px)";
      openSidebar.classList.add("hidden");
      closeSidebar.classList.remove("hidden");
    } else {
      sideBar.style.transform = "translateX(-260px)";
      closeSidebar.classList.add("hidden");
      openSidebar.classList.remove("hidden");
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
</style>