<template>
  
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
</script>

