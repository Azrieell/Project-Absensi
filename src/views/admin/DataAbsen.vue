<template>
  <div :key="updateKey" class="container mx-auto mt-12">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
      <h1 class="text-2xl mb-4 font-semibold">Daftar Kehadiran</h1>

      <div class="overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Absen Kedatangan</th>
              <th>Absen Pulang</th>
              <th>Foto Masuk</th>
              <th>Foto Pulang</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="presence in paginatedPresence" :key="presence.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td>{{ presence.id }}</td>
              <td>{{ presence['user'].name }}</td>
              <td :class="{ 'text-red-500': isLate(presence.masuk) }">
                {{ presence.tgl_absen }} {{ presence.masuk }}
                <p class="text-xs" v-if="isLate(presence.masuk)">
                  Terlambat
                </p>
                <p v-else class="text-lime-600 text-xs">
                  Tepat Waktu
                </p>
              </td>
              <td :class="{ 'text-orange-400': !presence.pulang }">
                <span v-show="presence.pulang">{{ presence.tgl_absen }} {{ presence.pulang }}</span>
                <span v-show="!presence.pulang">Belum pulang</span>
              </td>
              <td class="py-2 px-4 border-b"><img
                  :src="presence?.url || 'https://www.komysafety.com/images/banner/no-image.png'" alt=""
                  class="w-20 h-20"></td>
              <td class="py-2 px-4 border-b"><img
                  :src="presence?.urlOut || 'https://www.komysafety.com/images/banner/no-image.png'" alt=""
                  class="w-20 h-20"></td>
            </tr>
            <tr v-if="paginatedPresence == 0">
              <td colspan="6" class="text-3xl text-center pt-5 pb-5 font-semibold">Data kosong</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination controls -->
      <div class="flex justify-between items-center mt-4">
        <input type="date" v-model="selectedDate" class="p-2 border rounded" />
        <button @click="filterByDate" hidden
          class="bg-blue-500 text-base text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
          Filter by Date
        </button>
        <button @click="rekapData"
          class="bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-green-700">
          Rekap Data
        </button>
        <button @click="downloadPDF"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
          Download PDF
        </button>
        <button @click="downloadExcel"
          class="bg-yellow-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-yellow-700">
          Download Excel
        </button>
        <button @click="prevPage" :disabled="currentPage === 1"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Previous Page
        </button>
        <div>{{ currentPage }} / {{ totalPages }}</div>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Next Page
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { mapActions, mapGetters } from 'vuex';
import presence from '../../store/modules/admin/presence';

export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      selectedDate: null,
      updateKey: 0,
    };
  },
  computed: {
    ...mapGetters('presence', ['getPresence']),
    ...mapGetters('company', ['getCompany']),
    company() {
      return this.getCompany;
    },
    totalPages() {
      let filteredData = this.getPresence;

      // Filter berdasarkan tanggal
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate);
        filteredData = filteredData.filter(
          (presence) => new Date(presence.tgl_absen).toDateString() === selectedDate.toDateString()
        );
      }

      return Math.ceil(filteredData.length / this.perPage);
    },
    paginatedPresence() {
      let filteredData = this.getPresence;

      // Filter berdasarkan tanggal
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate);
        filteredData = filteredData.filter(
          (presence) => new Date(presence.tgl_absen).toDateString() === selectedDate.toDateString()
        );
      }

      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;

      if (filteredData.length === 0) return [];

      return filteredData.slice(start, end);
    },
  },
  methods: {
    ...mapActions('presence', ['fetchPresence']),
    filterByDate() {
      this.currentPage = 1;
    },
    nextPage() {
      // Menambahkan filter tanggal pada currentPage
      let filteredData = this.getPresence;
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate);
        filteredData = filteredData.filter(
          (presence) => new Date(presence.tgl_absen).toDateString() === selectedDate.toDateString()
        );
      }

      // Menyesuaikan currentPage berdasarkan data yang sesuai dengan filter tanggal
      const totalPages = Math.ceil(filteredData.length / this.perPage);

      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      // Mengganti kondisi untuk mengecek currentPage
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    isLate(entryTime) {
      if (this.company && this.company.jam_buka) {
        const entryDateTime = new Date(`2000-01-01T${entryTime}`);
        const companyOpeningTime = new Date(`2000-01-01T${this.company.jam_buka}`);
        const timeDifference = (entryDateTime - companyOpeningTime) / (1000 * 60);
        return timeDifference > 15;
      } else {
        return false;
      }
    },

    // Fungsi untuk merekap data berdasarkan bulan yang dipilih
    rekapData() {
      const groupedByMonth = this.getPresence.reduce((acc, presence) => {
        const monthYear = presence.tgl_absen.slice(0, 7);
        if (!acc[monthYear]) {
          acc[monthYear] = [];
        }
        acc[monthYear].push(presence);
        return acc;
      }, {});

      // Mendapatkan data presensi untuk bulan yang dipilih
      const selectedMonthData = groupedByMonth[this.selectedDate.slice(0, 7)] || [];

      // Memperbarui data pada tampilan tanpa refresh halaman
      // Jika menggunakan setPresence di store, gunakan ini:
      // this.$store.commit('presence/setPresence', selectedMonthData);

      // Jika menggunakan fetchPresence dari store, gunakan ini:
      this.$store.dispatch('presence/fetchPresence');

      this.updateKey += 1;
      // Menampilkan SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Data sudah direkap!',
        showConfirmButton: false,
        timer: 1500,
      });
    },

    getMonthYearString() {
      const selectedDate = new Date(this.selectedDate);
      const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      const month = monthNames[selectedDate.getMonth()];
      const year = selectedDate.getFullYear();
      return `${month} ${year}`;
    },
    // Fungsi untuk mengunduh data ke format PDF
    downloadPDF() {
      // Tambahkan SweetAlert2 konfirmasi di sini
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Apakah Anda yakin ingin mengunduh file PDF?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            const pdf = new jsPDF();
            const monthYear = this.getMonthYearString();

            // Header
            const headers = [['Nama Karyawan', 'Tanggal Absen', 'Jam Masuk', 'Jam Pulang', 'Status Terlambat']];

            // Data
            const data = this.paginatedPresence.map((presence) => {
              const jamPulang = presence.pulang ? presence.pulang : 'Belum Pulang';
              const statusTerlambat = this.isLate(presence.masuk) ? 'Terlambat' : 'Tidak Terlambat';
              return [presence['user'].name, presence.tgl_absen, presence.masuk, jamPulang, statusTerlambat];
            });

            pdf.autoTable({
              head: headers,
              body: data,
              startY: 20,
              theme: 'striped', // Ganti dengan tema lain jika diinginkan
            });

            pdf.text(`Rekap Absensi - ${monthYear}`, 20, 10);
            pdf.save(`rekap_absensi_${monthYear}.pdf`);
          } catch (error) {
            Swal.fire('Error', 'Gagal mengunduh PDF.', 'error');
          }
        }
      });
    },

    // Fungsi untuk mengunduh data ke format Excel
    downloadExcel() {
      const monthYear = this.getMonthYearString();

      // Tambahkan SweetAlert2 konfirmasi di sini
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Apakah Anda yakin ingin mengunduh file Excel?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            const dataWithNames = this.paginatedPresence.map((presence) => ({
              ...presence,
              Nama_Karyawan: presence['user'].name,
              Jam_Pulang: presence.pulang ? presence.pulang : 'Belum Pulang',
              Status_Terlambat: this.isLate(presence.masuk) ? 'Terlambat' : 'Tidak Terlambat',
            }));

            const worksheet = XLSX.utils.json_to_sheet(dataWithNames);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, `Rekap Absensi - ${monthYear}`);
            XLSX.writeFile(workbook, `rekap_absensi_${monthYear}.xlsx`);
          } catch (error) {
            Swal.fire('Error', 'Gagal mengunduh Excel.', 'error');
          }
        }
      });
    },
  },
  created() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.selectedDate = `${year}-${month}-${day}`;
    this.fetchPresence();
  },
  beforeMount() {
    this.fetchPresence();
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
