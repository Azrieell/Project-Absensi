<template>
  
  <!-- <SidebarComponentAdmin/> -->
  <NavbarComponent></NavbarComponent> 
  <DropdownComponent></DropdownComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script setup>
  // import SidebarComponentAdmin from './components/admin/SidebarComponentAdmin.vue'
  import NavbarComponent from './components/karyawan/NavbarComponent.vue'
  import FooterComponent from './components/karyawan/FooterComponent.vue'
  import DropdownComponent from './components/karyawan/DropdownComponent.vue'
  import "flowbite/dist/flowbite"
</script>