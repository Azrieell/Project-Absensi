<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7 mb-12"><b>Perusahaan</b></h1>
    </div>
  </div>
  <div class="container">
    <div class="w-500 bg-slate-800 h-500 pt-5 rounded-lg text-white text-2xl mt-12 p-5 mb-4">
      <h2 class="mb-5 ml-5">Identitas Perusahaan</h2>
      <hr>
      <div class="grid grid-cols-3 mt-9">
        <div class="ml-5 mb-8">
          <h4>Nama Perusahaan :</h4>
        </div>
        <div>
          <h4>SMK ASSALAAM BANDUNG</h4>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="ml-5">Alamat Perusahaan : </div>
        <div class="mr-12"><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3611571789847!2d107.58770767035121!3d-6.96665165279127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8deccecb6f1%3A0x658cc60fbe5017b9!2sSMK%20Assalaam%20Bandung%20(PUSAT%20KEUNGGULAN)!5e0!3m2!1sid!2sid!4v1696157120200!5m2!1sid!2sid"
            width="500" height="400" style="border:0; " loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
      <div class="mt-12 ml-5">
        <h4>Status : </h4>
       
      </div>
      <router-link @click="scrollToTop" to="/admin/perusahaan/edit">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 ml-5">
          Edit
        </button>
      </router-link>
    </div>
  </div>



</template>
<script>
export default {
  data() {
    return {
      isSwitchOn: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    toggleSwitch() {
      this.isSwitchOn = !this.isSwitchOn;
    }
  },
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');

  * {
    font-family: 'Fredoka', sans-serif;
  }
</style>