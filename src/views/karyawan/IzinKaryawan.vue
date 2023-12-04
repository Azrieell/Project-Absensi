<template>
    <div class="fullscreen-container">
        <div class="rounded-lg w-90 p-4 mx-auto overflow-hidden shadow-xl">
            <div class="container">
                <h5 class="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">Izin</h5><br>
            </div>
            <form @submit.prevent="addInformationEmployee">
                <!-- Input untuk tanggal -->
                <div class="w-full max-w-sm mx-auto rounded-lg">
                    <input type="date" id="tgl_keterangan" required placeholder="Masukkan Tanggal Tidak Akan Hadir"
                        v-model="informationData.tgl_keterangan"
                        class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4"
                        readonly />
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <!-- Input untuk alasan sakit -->
                    <textarea id="message" rows="4" v-model="informationData.alasan"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                        placeholder="Keterangan tidak hadir"></textarea>
                </div>
                <!-- Input untuk file foto -->
                <div class="mt-3 flex justify-center">
                    <div class="w-full max-w-sm">
                        <label for="default-input"
                            class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">PILIH FOTO</label>
                        <input type="file" id="file" @change="handleFileUpload"
                            class="bg-white border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5" />
                        <br />
                        <!-- Tampilkan preview gambar atau file PDF -->
                        <div v-if="informationData.file">
                            <template v-if="isImageFile(informationData.fileObject)">
                                <img :src="informationData.file" alt="Gambar yang Dipilih"
                                    class="p-5 w-48 h-w-48 rounded-lg mx-auto" />
                            </template>
                            <template v-else>
                                <p>File PDF tidak dapat ditampilkan. Silakan unduh untuk melihat.</p>
                            </template>
                        </div>
                    </div>
                </div>
                <!-- Tombol Simpan -->
                <div class="flex justify-center max-w-sm mx-auto mt-4">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.fullscreen-container {
    width: 100vw;
    height: 80vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script>
import Swal from 'sweetalert2';
import {
    mapActions, mapGetters
} from 'vuex';

export default {
    data() {
        return {
            informationData: {
                tgl_keterangan: '',
                keterangan: 'Izin',
                alasan: '',
                file: null
            },
        };
    },
    computed: {
        ...mapGetters('presensi', ['getpresensiemployee']),
    },
    methods: {
        ...mapActions('informationemployee', ['checkPermissionExistenceForDate', 'createInformationEmployee']),
        async addInformationEmployee() {
            try {
                // Panggil getter untuk mendapatkan informasi presensi di hari yang sama
                const presensiData = this.getpresensiemployee;
                const isAbsenExist = presensiData.some(item => item.tgl_absen === this.informationData.tgl_keterangan);

                if (isAbsenExist) {
                    // Tampilkan pesan kesalahan jika data absen sudah ada
                    Swal.fire({
                        icon: 'warning',
                        title: 'Perhatian!',
                        text: 'Anda sudah melakukan absen pada hari ini.',
                    });
                } else {
                    // Lanjutkan dengan mengirim data keterangan sakit
                    await this.createInformationEmployee(this.informationData);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Anda berhasil mengisi keterangan sakit',
                    });
                    this.$router.push({
                        name: 'HomeKaryawan',
                    });
                    this.resetForm();
                }
            } catch (error) {
                // Tampilkan pesan kesalahan umum jika terjadi error
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        },
        handleFileUpload(event) {
            const fileInput = event.target;
            const file = fileInput.files[0];

            if (file) {
                // Validasi tipe file
                const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
                if (!allowedTypes.includes(file.type)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Tipe File Tidak Valid',
                        text: 'Harap pilih file dengan tipe .png, .jpg, .jpeg, atau .pdf.',
                    });
                    return;
                }

                // Validasi ukuran file
                const maxSize = 5 * 1024 * 1024; // 5 MB dalam byte
                if (file.size > maxSize) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ukuran File Terlalu Besar',
                        text: 'Harap pilih file yang kurang dari 5 MB.',
                    });
                    return;
                }

                // Mengonversi URL gambar atau file PDF menjadi objek File
                const fileUrl = URL.createObjectURL(file);
                this.informationData.file = fileUrl;

                // Simpan objek File ke dalam data
                this.informationData.fileObject = file;
            } else {
                this.informationData.file = null;
                this.informationData.fileObject = null;
            }
        },
        isImageFile(file) {
            // Fungsi untuk memeriksa apakah file adalah gambar
            return file && file.type.startsWith('image');
        },
        resetForm() {
            this.informationData = {
                tgl_keterangan: '',
                keterangan: 'Izin',
                alasan: '',
                file: null
            };
        },
        updateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = `${(now.getMonth() + 1)}`.padStart(2, '0');
            const date = `${now.getDate()}`.padStart(2, '0');
            this.informationData.tgl_keterangan = `${year}-${month}-${date}`;
        },
    },
    mounted() {
        this.updateTime();
    }
};
</script>