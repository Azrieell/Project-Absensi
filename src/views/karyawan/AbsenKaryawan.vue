<template>
    <div class="flex items-center">
        <div
            class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-2xl">Selamat Pagi</p>
                    <h1 class="mt-1 text-2xl font-semibold">Aloe Cactus</h1>
                </div>
                <div class="flex flex-col-reverse ml-12">
                    <p class="ml-12 text-1xl">12.00 WIB</p>
                </div>
            </div>
            <br>
            <div v-if="showCamera">
                <video ref="videoElement" autoplay></video>
                <button @click="takeSnapshot"
                    class="text-white items-center mt-5 mx-20 text-md w-50 font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    <span>Absen Sekarang</span>
                </button>
            </div>
            <div v-else>
                <img :src="imageData" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import VueWebCam from 'vue-web-cam';

    export default {
        components: {
            VueWebCam
        },
        data() {
            return {
                showCamera: true,
                imageData: null,
                videoElement: null
            };
        },
        methods: {
            async takeSnapshot() {
                const video = this.$refs.videoElement;
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageUrl = canvas.toDataURL('image/png');
                this.imageData = imageUrl;
                this.showCamera = false;
                await this.uploadImageToApi(imageUrl); // Fungsi untuk mengunggah gambar ke API
            },
            async uploadImageToApi(imageData) {
                // Logika untuk mengirim data gambar ke API dan menyimpannya ke database
                // Anda dapat menggunakan metode seperti axios untuk melakukan permintaan HTTP
            }
        },
        mounted() {
            const video = this.$refs.videoElement;
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                        video: true
                    })
                    .then(stream => {
                        video.srcObject = stream;
                        this.videoElement = video;
                    })
                    .catch(error => {
                        console.error('Could not access the webcam: ', error);
                    });
            }
        }
    };
</script>