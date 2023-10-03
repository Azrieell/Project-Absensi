<template>
  
<<<<<<< HEAD
  <!-- <SidebarComponentAdmin/> -->
  <!-- <NavbarComponent></NavbarComponent>
  <FooterComponent></FooterComponent> -->
  <router-view></router-view>
</template>

<script setup>
  import SidebarComponentAdmin from './components/admin/SidebarComponentAdmin.vue'
  import NavbarComponent from './components/karyawan/NavbarComponent.vue'
  import FooterComponent from './components/karyawan/FooterComponent.vue'
=======
  <!-- <Loading/> -->
  <!-- <RouterView @id-menu="setMenu($event)"></RouterView> -->

  <SidebarComponentAdmin/>
  <!-- <NavbarComponent></NavbarComponent>
  <FooterComponent></FooterComponent> -->
  <!-- <router-view></router-view> -->


</template>

<script>
import { ref } from "vue";
 import SidebarComponentAdmin from './components/admin/SidebarComponentAdmin.vue'
export default{
  components:{
    SidebarComponentAdmin
  },
  setup() {
    const idMenu = ref(0);

    function setMenu(id) {
      idMenu.value = id;
    }
    return {
      idMenu,
      setMenu
    }
  }
}
>>>>>>> 14568e565b931954f0545f6aea9acf8df324ca4d
</script>

