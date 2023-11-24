<template>
  <div>
    <transition name="fade"> <!-- Add transition class name -->
      <router-view/>
    </transition>
  </div>
</template>
<script setup>
import "flowbite/dist/flowbite";

</script>
<style scoped>
/* Add this style block to your component's template */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}</style>