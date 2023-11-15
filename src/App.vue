<template>
  <div>
  <router-view/>
  </div>
</template>
<script>
import "flowbite/dist/flowbite";
export default {
  methods:{
    fetchData(){
      this.$showNetworkError();
    }
  }
}
</script>