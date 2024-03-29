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
        <video ref="videoElement" autoplay class="rounded-xl mt-2"></video>
        <button @click="validateLocationAndTakeSnapshot"
          class="text-white items-center mt-5 mx-20 text-md w-50 font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
          <span>Absen Pulang</span>
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
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';
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
      tgl_absen: '',
    };
  },
  computed: {
    ...mapGetters('userkaryawan', ['getUserKaryawan']),
    ...mapGetters('informationemployee', ['getInformation', 'getInformationLength']),
    ...mapGetters('presensi', ['getpresensiemployee']),
    getpresensiemployee() {
      return this.$store.getters['presensi/getpresensiemployee'] || [];
    },
    presensiEmployee() {
      const presensiData = this.getpresensiemployee;

      console.log('presensiData:', presensiData);
      console.log('today:', this.tgl_absen);

      // Lakukan filter data berdasarkan tanggal terbaru/hari ini
      const filteredData = presensiData.filter(item => {
        return item.tgl_absen === this.tgl_absen;
      });
      console.log('filteredData:', filteredData);

      if (filteredData.length > 0) {
        const firstData = filteredData[0];
        if (firstData.masuk !== undefined && firstData.pulang !== undefined) {
          // Lakukan sesuatu dengan properti 'masuk' dan 'pulang'
          console.log('Jam Masuk:', firstData.masuk);
          console.log('Jam Pulang:', firstData.pulang);
          // ... (lanjutan logika Anda)
          return firstData;
        }
      }

      return {
        masuk: 'Belum ada data',
        pulang: 'Belum ada data',
      };
    },
    employee() {
      return this.getUserKaryawan;
    },
    isCheckInDone() {
      return this.presensiEmployee.pulang !== null;
    },
  },
  methods: {
    ...mapActions('presensi', ['fetchPresensiEmployee']),
    ...mapActions('userkaryawan', ['fetchUserKaryawan']),
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
    async validateLocationAndTakeSnapshot() {
            try {
                await this.$store.dispatch('company/fetchCompany');
                const companyData = this.$store.getters['company/getCompany'];

                if (!this.isCheckInDone) {
                    if (companyData && companyData.status) {
                        const locationValid = await this.validateLocation(companyData);
                        if (locationValid) {
                            // Validasi lokasi berhasil, lanjutkan dengan mengambil snapshot

                            // Ambil data keterangan sakit
                            await this.$store.dispatch('informationemployee/fetchInformation');
                            const informationEmployee = this.$store.getters['informationemployee/getInformation'];

                            // Pindahkan validasi lokasi ke sini
                            const isSickToday = informationEmployee.informationSick
                                ? informationEmployee.informationSick.some(record => record.tgl_keterangan === this.tgl_absen)
                                : false;

                            if (!isSickToday) {
                                await this.takeSnapshot();
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Gagal Absen',
                                    text: 'Anda memiliki keterangan sakit hari ini.',
                                });
                            }
                        } else {
                            // Lokasi tidak valid, tampilkan pesan kesalahan
                            Swal.fire({
                                icon: 'error',
                                title: 'Gagal Absen',
                                text: 'Anda tidak berada di lokasi yang diizinkan untuk absen.',
                            });
                        }
                    } else {
                        // Data perusahaan tidak valid atau perusahaan tidak beroperasi
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal Absen',
                            text: `${companyData.nama} tutup! Tidak memungkinkan absensi saat ini.`,
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Info',
                        text: 'Anda sudah melakukan absen pulang.',
                    });
                    this.$router.push({
                        name: 'HomeKaryawan',
                    });
                }
            } catch (error) {
                console.error('Error validating location and taking snapshot:', error);
            }
        },
    async validateLocation(companyData) {
      try {
        // Mendapatkan lokasi pengguna
        const userLocation = await this.getUserLocation();

        if (!userLocation) {
          console.error('Gagal mendapatkan lokasi pengguna.');
          return false;
        }

        // Menghitung jarak antara lokasi pengguna dan lokasi perusahaan
        const distance = this.calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          companyData.latitude,
          companyData.longitude
        );

        console.log('Distance:', distance, 'Radius:', companyData.radius);

        // Memeriksa apakah pengguna berada dalam radius perusahaan
        const isWithinRadius = distance <= companyData.radius;

        // Memeriksa apakah jarak relatif cukup dekat (misalnya, kurang dari 0.1 km)
        const isCloseEnough = distance <= 0.1; // Sesuaikan dengan kebutuhan Anda

        return isWithinRadius && isCloseEnough;
      } catch (error) {
        console.error('Error validating location:', error);
        return false;
      }
    },

    async validateLocationOnPageLoad() {
      try {
        await this.$store.dispatch('company/fetchCompany');
        const companyData = this.$store.getters['company/getCompany'];

        if (companyData) {
          const locationValid = await this.validateLocation(companyData);
          if (!locationValid) {
            // Menampilkan pesan SweetAlert2 jika pengguna berada di luar lokasi saat halaman dimuat
            Swal.fire({
              icon: 'error',
              title: 'Akses Ditolak',
              text: 'Anda tidak berada di lokasi yang diizinkan untuk absen pulang.'
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Akses di setujui',
              text: 'Anda berada dilokasi segera untuk absen pulang.'
            });
          }

        } else {
          console.error('Company data is not available.');
        }
      } catch (error) {
        console.error('Error validating location on page load:', error);
      }
    },
    getUserLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              resolve(userLocation);
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject('Geolocation tidak didukung pada peramban ini.');
        }
      });
    },

    calculateDistance(lat1, lon1, lat2, lon2) {
      // Haversine formula untuk menghitung jarak antara dua titik koordinat
      const R = 6371; // Radius bumi dalam kilometer
      const dLat = this.deg2rad(lat2 - lat1);
      const dLon = this.deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Jarak dalam kilometer

      return distance;
    },


    deg2rad(deg) {
      return deg * (Math.PI / 180);
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
      this.tgl_absen = `${year}-${month}-${date}`;
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
          this.validateLocationOnPageLoad();
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
    this.fetchPresensiEmployee();
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
  },
  beforeDestroy() {
    // Panggil metode untuk mematikan kamera sebelum komponen dihancurkan
    this.destroyCamera();
    clearInterval(this.intervalId); // Hentikan interval
  },
  created() {
    this.fetchUserKaryawan();
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