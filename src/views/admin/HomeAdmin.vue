<template>
<div class="container mx-auto">
  <div class="max-w-screen-lg">
  <div class="grid max-w-screen-lg gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
    <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
      <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill"
              viewBox="0 0 16 16">
              <path
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
      </div>
      <p class="text-sm font-medium text-gray-500">Jumlah Karyawan</p>
      <p class="text-4xl font-medium text-gray-800">{{ employee.length }}</p>
      <div class="float-right flex -space-x-2">
        <img v-for="infoEmployee in getkaryawan" :key="infoEmployee.uuid" class="h-7 w-7 rounded-full ring ring-white"  :src="infoEmployee.url"/>
        <div class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">{{ employee.length }}+</div>
      </div>
    </div>

    <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
      <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              class="bi bi-person-raised-hand" viewBox="0 0 16 16">
              <path
                d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z" />
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            </svg>
      </div>
      <p class="text-sm font-medium text-gray-500">jumlah Hadir</p>
      <p class="text-4xl font-medium text-gray-800">{{ presence.length }}</p>
    </div>

    <div class="max-w-md rounded-lg border px-6 pt-6 pb-10">
      <div class="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-building"
              viewBox="0 0 16 16">
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
              <path
                d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
            </svg>
      </div>
      <p class="text-sm font-medium text-gray-500">Status perusahaan</p>
      <span :class="{'text-4xl font-semibold': company.status, 'text-4xl': !company.status}">
          {{ company.status ? 'Buka' : 'Tutup' }}
        </span>
    </div>
  </div>
</div>

</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  computed:{
    ...mapGetters('karyawan',['getkaryawan']),
    ...mapGetters('presence',['getPresence']),
    ...mapGetters('company',['getCompany']),
    employee(){
      return this.getkaryawan
    },
    presence(){
      return this.getPresence
    },
    company(){
      return this.getCompany
    }
  },
  methods:{
    ...mapActions('karyawan', ['fetchKaryawan']),
    ...mapActions('presence', ['fetchPresence']),
    ...mapActions('company', ['fetchCompany']),
    ...mapActions('information',['fetchInformation']),
    ...mapActions('user',['fetchUser']),
    ...mapActions('posisi',['fetchPosisi']),
  },
  created(){
    this.fetchKaryawan();
    this.fetchPresence();
    this.fetchCompany();
    this.fetchInformation();
    this.fetchUser();
    this.fetchPosisi();
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
</style>