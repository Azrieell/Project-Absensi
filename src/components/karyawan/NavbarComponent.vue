<template>
  <!-- Main navigation container -->
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between  py-5 shadow-sm shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-8"
    style="background-color: #222831;">
    <div class="flex w-full flex-wrap  items-center sm:-ml-8 -ml-20 px-3">


      <!-- Collapsible navigation container -->
      <div class="flex justify-between max-w-sm mx-auto text-center" id="navbarSupportedContent1" data-te-collapse-item>
        <div class="flex justify-center max-w-sm mx-auto">
          <ul data-te-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pr-40" data-te-nav-item-ref>
              <a class="text-white font-bold transition duration-200 justify-center ml-60" href="#" data-te-nav-link-ref
                style="font-family: 'Fredoka', sans-serif; font-size: 30px;">Absensi</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative group">
        <a href="#" class="no-underline  text-white flex items-center py-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10 sm:-ml-20 ml-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <div class="items-center absolute border border-t-0 rounded-b-lg bg-white p-2 sm:-ml-28 ml-2 invisible group-hover:visible w-auto">
          <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">Profile</a>
          <hr class="border-t mx-2 border-grey-ligght">
          <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">Sign Out</a>
        </div>
      </div>

    </div>
  </nav>
</template>
