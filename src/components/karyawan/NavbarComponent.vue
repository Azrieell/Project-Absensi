<template>
    <!-- Main navigation container -->
<nav
  class="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-6" style="background-color: #222831;">
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    

    <!-- Collapsible navigation container -->
    <div
      class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1" 
      data-te-collapse-item>
      <ul data-te-navbar-nav-ref>
        <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            class="text-white font-bold transition duration-200"
            href="#"
            data-te-nav-link-ref style="font-family: 'Fredoka', sans-serif; font-size: 40px;  margin-left: 500%;"
            >Absensi</a>
        </li>
      </ul>
    </div>

    <!-- Right elements -->
    <div class="relative flex items-center">
      <!-- Cart Icon -->
      <a
        class="mr-4 text-white transition duration-200"
        href="#">
        <span class="[&>svg]:w-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

        </span>
      </a>

      <!-- Container with two dropdown menus -->
      <div
        class="relative"
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">
        <!-- First dropdown trigger -->
        <a
          class="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          </a>
      </div>
    </div>
  </div>
</nav>
</template>