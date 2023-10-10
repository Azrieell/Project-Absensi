<template>
  <div class="relative inline-block w-10 h-6">
    <input type="checkbox" class="sr-only" v-model="checked" @change="$emit('change', checked)" />
    <div class="w-10 h-6 bg-gray-300 rounded-full shadow-inner"
      :class="{'bg-blue-500': checked, 'bg-gray-300': !checked}"></div>
    <div class="absolute w-6 h-6 bg-white rounded-full shadow transition-transform transform"
      :class="{'translate-x-full': checked, 'translate-x-0': !checked}"></div>
  </div>
</template>

<script>
  export default {
    name: 'SwitchButton',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      checked: {
        get() {
          return this.value;
        },
        set(checked) {
          this.$emit('change', checked);
        }
      }
    }
  };
</script>