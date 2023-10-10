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
        <GoogleMap :api-key="apiKey" style="width: 150%; height: 400px; border-radius: 20px;"
          :center="{lat: lat, lng: lng}" :zoom="15">
          <Marker :options="{ position: {lat: lat, lng: lng} }" />
        </GoogleMap>
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
  import {
    GoogleMap,
    Marker
  } from 'vue3-google-map'

  export default {
    components: {
      GoogleMap,
      Marker
    },

    data() {
      return {
        apiKey: "AIzaSyCSHTXmJX6rSLH8BzhBZdci3e1cwxGFZD4",
        lat: -6.9502072,
        lng: 107.6224415
      }
    },

    created() {
      this.$getLocation()
        .then((coordinates) => {
          console.log(coordinates);
          this.lat = coordinates.lat;
          this.lng = coordinates.lng;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');

  * {
    font-family: 'Fredoka', sans-serif;
  }

  .map {
    height: 400px;
    width: 550px;
  }
</style>