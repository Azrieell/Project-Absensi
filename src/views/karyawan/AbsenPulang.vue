<template>
  <div class="fullscreen-container flex items-center mb-10">
    <div
      class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-lg">{{ greeting }}</p>
          <h1 class="mt-1 text-lg font-semibold">{{ employee.nama }}</h1>
        </div>
        <div class="flex flex-col-reverse ml-12">
          <p class="ml-12 text-m">{{ currentTime }} {{ timeZoneString }}</p>
          <p class="ml-12 text-m">{{ formDataPresenceOut.tgl_absen }}</p>
        </div>
      </div>
      <div v-if="showCamera">
        <video ref="videoElement" autoplay></video>
        <button @click="takeSnapshot"
          class="text-white items-center mt-5 mx-20 text-md w-50 font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
          <span>Absen Sekarang</span>
        </button>
      </div>
      <div v-else>
        <img :src="imageData" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.fullscreen-container {
  width: 100vw;
  /* Lebar 100% dari viewport width */
  height: 80vh;
  /* Tinggi 100% dari viewport height */
  /* Tetap di posisi saat scroll */
  top: 0;
  left: 0;
  z-index: 1;
  /* Atur z-index sesuai kebutuhan */
}
</style>
<script>
import axios from 'axios'; // Import axios here

import VueWebCam from 'vue-web-cam';

export default {
  components: {
    VueWebCam
  },
  data() {
    return {
      formDataPresenceOut: {
        tgl_absen: null,
        pulang: '',
        fileOut: null
      },
      showCamera: true,
      imageData: null,
      videoElement: null,
      currentTime: '',
      greeting: '',
      isAbsenClicked: false,
      intervalId: null, // Menyimpan ID interval untuk di-clear nanti
      timeZoneString: '', // Menyimpan singkatan zona waktu
      mediaStream: null,
    };
  },
  methods: {
    async takeSnapshot() {
      const video = this.$refs.videoElement;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/jpeg');
      // Perbarui state
      this.imageData = imageData;
      this.showCamera = false;
      // Ubah data URI menjadi objek File
      const blob = this.dataURItoBlob(imageData);
      const fileOut = new File([blob], 'snapshot.jpg');
      // Atur nilai file dalam formDataPresence
      this.formDataPresenceOut.fileOut = fileOut;
      // Jika tombol belum diklik, set formDataPresence.masuk sesuai dengan waktu saat ini
      if (!this.isAbsenClicked) {
        this.formDataPresenceOut.pulang = this.formatTime(this.currentTime);
      }
      // Hentikan pembaruan waktu
      clearInterval(this.intervalId);
      // Sekarang formDataPresence telah diperbarui, Anda dapat menggunakannya untuk mengirim data ke backend
      await this.uploadDataToApi(this.formDataPresenceOut);
      // Ubah properti isAbsenClicked menjadi true setelah semua pemrosesan selesai
      this.isAbsenClicked = true;
      // Mulai kembali interval untuk memperbarui waktu setelah absen berhasil
      this.intervalId = setInterval(this.updateTime, 1000);
      this.resetForm()
    },

    async uploadDataToApi(formDataPresenceOut) {
      console.log('Sending data to API:', formDataPresenceOut); // Menampilkan data sebelum mengirim
      try {
        const response = await axios.patch(
          '/employee/presence/out',
          formDataPresenceOut, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        );
        console.log('Response from API:', response.data); // Menampilkan respons dari server
        if (response.status >= 200 && response.status < 300) {
          console.log('Data successfully uploaded');
          Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: `Anda berhasil mengisi absensi pulang pada jam ${this.currentTime}`,
          });
          // Setelah berhasil, reset kembali isAbsenClicked ke false untuk memungkinkan absen berikutnya
          this.isAbsenClicked = false;
          this.$router.push({
            name: 'HomeKaryawan',
          });
        } else {
          console.error('Failed to upload data to API');
        }
      } catch (error) {
        console.error('Error uploading data to API:', error.response || error.message);
      }
    },
    resetForm() {
      this.formDataPresenceOut = {
        tgl_absen: null,
        pulang: '',
        fileOut: null
      }
    },
    dataURItoBlob(dataURI) {
      const byteString = atob(dataURI.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {
        type: 'image/jpeg'
      });
    },
    detectUserTimeZone() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

              // Mendapatkan zona waktu berdasarkan koordinat lintang dan bujur
              const timeZoneOffset = this.getTimeZoneOffset(latitude, longitude);
              this.setTimeZoneString(timeZoneOffset);
            },
            (error) => {
              console.error('Gagal mendapatkan lokasi:', error);
            }
          );
        } else {
          console.error('Geolocation tidak didukung pada peramban ini.');
        }
      },
      getTimeZoneOffset(latitude, longitude) {
        const timestamp = Date.now() / 1000; // Waktu saat ini dalam detik
        const apiUrl =
          `https://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=position&lat=${latitude}&lng=${longitude}&time=${timestamp}`;
        const dummyOffset = 7; // Contoh offset untuk WIB

        return dummyOffset; // Kembalikan offset zona waktu
      },
      setTimeZoneString(timeZoneOffset) {
        let timeZoneString = '';

        // Deteksi zona waktu berdasarkan offset
        if (timeZoneOffset === 7 || timeZoneOffset === -17) {
          timeZoneString = 'WIB'; // Waktu Indonesia Bagian Barat (WIB)
        } else if (timeZoneOffset === 8 || timeZoneOffset === -16) {
          timeZoneString = 'WITA'; // Waktu Indonesia Bagian Tengah (WITA)
        } else if (timeZoneOffset === 9 || timeZoneOffset === -15) {
          timeZoneString = 'WIT'; // Waktu Indonesia Bagian Timur (WIT)
        } else {
          timeZoneString = 'Waktu lokal tidak diketahui';
        }

        this.timeZoneString = timeZoneString;
      },

      formatTime(time) {
        // Format waktu menjadi 'HH:MM:SS'
        const date = new Date(`01/01/2000 ${time}`);
        return date.toTimeString().split(' ')[0];
      },

      updateTime() {
        const now = new Date();
        const hours = `${now.getHours()}`.padStart(2, '0');
        const minutes = `${now.getMinutes()}`.padStart(2, '0');
        const seconds = `${now.getSeconds()}`.padStart(2, '0');
        this.currentTime = `${hours}:${minutes}:${seconds}`;

        // Mengatur formDataPresence.masuk
        this.formDataPresenceOut.pulang = this.currentTime;

        // Mengatur formDataPresence.tgl_absen
        const year = now.getFullYear();
        const month = `${(now.getMonth() + 1)}`.padStart(2, '0'); // Tambah 1 karena Januari dimulai dari 0
        const date = `${now.getDate()}`.padStart(2, '0');
        this.formDataPresenceOut.tgl_absen = `${year}-${month}-${date}`;

      // Mengatur salam (greeting)
      const currentHour = now.getHours();
      if (currentHour >= 5 && currentHour < 10) {
        this.greeting = 'Selamat Pagi';
      } else if (currentHour >= 10 && currentHour < 15) {
        this.greeting = 'Selamat Siang';
      } else if (currentHour >= 15 && currentHour < 18) {
        this.greeting = 'Selamat Sore';
      } else {
        this.greeting = 'Selamat Malam';
      }
    },

      loadData() {
        this.formDataPresenceOut.tgl_absen = this.formDataPresenceOut.tgl_absen;
        this.formDataPresenceOut.pulang = this.formatTime(this.currentTime); // Menggunakan formatTime
        this.formDataPresenceOut.fileOut = this.imageData;
      },
      destroyCamera() {
        const video = this.$refs.videoElement;

        if (this.mediaStream) {
          const tracks = this.mediaStream.getTracks();

          tracks.forEach(track => {
            track.stop(); // Memberhentikan track
          });

          video.srcObject = null; // Membersihkan objek video
          this.mediaStream = null; // Menghapus referensi ke objek MediaStream
        }
      },
    },

  mounted() {
    const video = this.$refs.videoElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: true
      })
        .then(stream => {
          video.srcObject = stream;
          this.mediaStream = stream; // Simpan referensi ke objek MediaStream
          this.videoElement = video;
        })
        .catch(error => {
          console.error('Could not access the webcam: ', error);
        });
    }
    this.updateTime();
    // Simpan ID interval untuk di-clear nanti
    this.intervalId = setInterval(this.updateTime, 1000);
    this.loadData();
    this.detectUserTimeZone();
  },
  watch: {
    currentTime(newValue) {
      // Jika tombol belum diklik, formDataPresenceOut.masuk tetap kosong
      if (!this.isAbsenClicked) {
        this.formDataPresenceOut.pulang = '';
      } else {
        this.formDataPresenceOut.pulang = newValue;
      }
    }
  }

};
</script>