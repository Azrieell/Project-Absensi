<template>
    <div class="rounded-lg w-90 p-4 ml-20 mr-20 overflow-hidden shadow-xl sm:mt-52 mt-40">
        <div class="container">
            <h5 class="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">Izin</h5><br>
        </div>
        <form @submit.prevent="addInformationPermissionEmployee">
            <div class="w-full max-w-sm mx-auto rounded-lg">
                <input type="date" id="tgl_keterangan" required placeholder="Masukkan Tanggal Tidak Akan Hadir" v-model="informationPermissionData.tgl_keterangan"
                    class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <textarea id="message" rows="4" v-model="informationPermissionData.alasan"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                    placeholder="Keterangan Izin"></textarea>
            </div>
            <div class="mt-3 flex justify-center">
                <div class="w-full max-w-sm">
                    <label for="default-input"
                        class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">PILIH
                        FOTO</label>
                    <input type="file" id="file" @change="handleFileUpload"
                        class="bg-white border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <br>
                    <img v-if="informationPermissionData.file" :src="informationPermissionData.file" alt="Gambar yang Dipilih"
                        class="p-5 w-72 h-72 rounded-full mx-auto">
                </div>
            </div>
            <div class="flex justify-center max-w-sm mx-auto">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Simpan
                </button>
            </div>
        </form>
    </div>

</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                informationPermissionData: {
                    tgl_keterangan: '',
                    keterangan: 'Izin',
                    alasan: '',
                    file: null // Untuk file foto
                }
            };
        },
        computed: {
            ...mapGetters('informationemployee', ['getInformation']),
        },
        methods: {
            ...mapActions('informationemployee', ['fetchInformation', 'createInformationPermissionEmployee']),
            async addInformationPermissionEmployee() {
                try {
                    await this.createInformationPermissionEmployee(this.informationPermissionData);
                    Swal.fire({
                            icon: 'success',
                            title: 'Berhasil!',
                            text: `Anda berhasil mengisi keteraangan Izin`,
                        });
                    this.$router.push({
                        name: 'HomeKaryawan'
                    });
                    this.informationPermissionData = {
                        tgl_keterangan: '',
                        keterangan: 'Izin',
                        alasan: '',
                        file: null // Buat file foto
                    };
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                }
            },
            handleFileUpload(event) {
                this.informationPermissionData.file = event.target.files[0];
            },
        },
        beforeRouteEnter(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },

  beforeRouteUpdate(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },
    };
</script>