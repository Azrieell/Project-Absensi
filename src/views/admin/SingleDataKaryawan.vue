<template>
  <Loading v-if="loading" />
  <div v-else :key="employee.uuid" class="container">
    <div v-if="employee">
      <div
        class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
        <div class="text-lg font-semibold mb-4">Profil Karyawan</div>
        <div class="pt-4 flex flex-row">
          <div class="basis-1/2 mx-10">
            <img :src="employee?.url || 'https://i.pinimg.com/originals/c6/e9/ed/c6e9ed167165ca99c4d428426e256fae.png'"
              alt="Gambar yang Dipilih" class="p-1 w-72 h-72 rounded-full border border-gray-950">
            <div class="text-sm p-5 font-semibold mb-4">Akun Pengguna</div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Username:</label>
              <div class="text-lg font-medium">{{ employee.name }}</div>
            </div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Email:</label>
              <div class="text-lg font-medium">{{ employee.email }}</div>
            </div>
            <div class="mb-4 pl-5">
              <label class="text-sm text-gray-600">Role:</label>
              <div class="text-lg font-medium">{{ employee.role }}</div>
            </div>
          </div>
          <div class="basis-1/2 p-4">
            <div class="w-1/2">
              <div class="mb-4">
                <label class="text-sm text-gray-600">NIP:</label>
                <div class="text-lg font-medium">{{ employee.nip }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Nama:</label>
                <div class="text-lg font-medium">{{ employee.nama }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Tempat tanggal lahir:</label>
                <div class="text-lg font-medium">{{ employee.kota }}, {{ employee.tgl_lahir }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Jenis kelamin:</label>
                <div class="text-lg font-medium">{{ employee.jenis_kelamin }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Agama:</label>
                <div class="text-lg font-medium">{{ employee.agama }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Alamat:</label>
                <div class="text-lg font-medium">{{ employee.alamat }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">No. Handphone:</label>
                <div class="text-lg font-medium">{{ employee.no_hp }}</div>
              </div>
              <div class="mb-4">
                <label class="text-sm text-gray-600">Jabatan:</label>
                <div class="text-lg font-medium">{{ employee.jabatan }}</div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-8 border-t-2 border-gray-300" />
        <div class="text-lg font-semibold mt-8 mb-4 pl-12">Absensi dan Informasi</div>
        <div class="flex items-center mb-4 pl-12 space-x-2">
          <div class="flex space-x-2">
            <button @click="filterAbsensiByMonth" class="px-4 py-2 bg-blue-500 text-white rounded">Filter</button>
            <button @click="downloadPDF" class="px-4 py-2 bg-green-500 text-white rounded">Download PDF</button>
            <button @click="downloadExcel" class="px-4 py-2 bg-green-500 text-white rounded">Download Excel</button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-12">
          <div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Absensi:</label>
              <div class="text-lg font-medium">{{ employee.presence.length }}</div>
            </div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Sakit:</label>
              <div class="text-lg font-medium">{{ employee.informationSick.length }}</div>
            </div>
            <div class="mb-4">
              <label class="text-sm text-gray-600">Jumlah Izin:</label>
              <div class="text-lg font-medium">{{ employee.informationPermission.length }}</div>
            </div>
          </div>
          <div>
            <div v-if="employee['presence'].length > 0">
              <label class="text-sm text-gray-600">Detail Absensi:</label>
              <table class="min-w-full w-96">
                <thead>
                  <tr>
                    <th class="text-left">Tanggal Absen</th>
                    <th class="text-left">Jam Masuk</th>
                    <th class="text-left">Jam Pulang</th>
                    <th class="text-left">Status Terlambat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(presence, index) in paginatedAbsensi" :key="presence.id">
                    <td>{{ presence.tgl_absen }}</td>
                    <td>{{ presence.masuk }}</td>
                    <td :class="{ 'text-red-500': isLate(presence.masuk), 'text-green-500': !isLate(presence.masuk) }">
                      {{ presence.pulang ? presence.pulang : 'Belum Pulang' }}
                    </td>
                    <td :class="{ 'text-red-500': isLate(presence.masuk), 'text-green-500': !isLate(presence.masuk) }">
                      {{ isLate(presence.masuk) ? 'Terlambat' : 'Tidak Terlambat' }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="mt-4 flex justify-between items-center">
                <button @click="previousPageAbsensi" :disabled="currentPageAbsensi === 1"
                  class="px-2 py-2 text-xs bg-blue-500 text-white rounded">
                  Halaman Sebelumnya
                </button>
                <span class="mx-2">Halaman {{ currentPageAbsensi }} dari {{ totalPagesAbsensi }}</span>
                <button @click="nextPageAbsensi" :disabled="currentPageAbsensi === totalPagesAbsensi"
                  class="px-2 py-2 text-xs bg-blue-500 text-white rounded">
                  Halaman Berikutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex';
import Loading from '../../components/Loading.vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      loading: true,
      currentPageAbsensi: 1,
      pageSizeAbsensi: 5,
      selectedMonth: '',
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapGetters('karyawan', ['getEmployeeByUuid']),
    ...mapGetters('company', ['getCompany']),
    employee() {
      return this.getEmployeeByUuid(this.$route.params.uuid);
    },
    company() {
      return this.getCompany;
    },
    paginatedAbsensi() {
      // Sesuaikan logika filter untuk menyesuaikan dengan bulan yang dipilih
      const filteredAbsensi = this.employee['presence'].filter(presence => {
        return !this.selectedMonth || presence.tgl_absen.includes(this.selectedMonth);
      });

      const startIndex = (this.currentPageAbsensi - 1) * this.pageSizeAbsensi;
      const endIndex = startIndex + this.pageSizeAbsensi;
      return filteredAbsensi.slice(startIndex, endIndex);
    },
    totalPagesAbsensi() {
      return Math.ceil(this.employee['presence'].length / this.pageSizeAbsensi);
    },
    months() {
      // Ambil bulan-bulan yang ada pada data absensi
      const uniqueMonths = [...new Set(this.employee['presence'].map(presence => presence.tgl_absen.substring(0, 7)))];
      return uniqueMonths;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    ...mapActions('karyawan', ['fetchSingleKaryawan']),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // Fungsi untuk halaman berikutnya pada tabel absensi
    nextPageAbsensi() {
      if (this.currentPageAbsensi < this.totalPagesAbsensi) {
        this.currentPageAbsensi++;
      }
    },

    // Fungsi untuk halaman sebelumnya pada tabel absensi
    previousPageAbsensi() {
      if (this.currentPageAbsensi > 1) {
        this.currentPageAbsensi--;
      }
    },
    // Fungsi untuk mendapatkan informasi terlambat atau tidak
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
    // Fungsi untuk merubah format tanggal menjadi nama bulan
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    },
    // Fungsi untuk mendapatkan bulan dan tahun dari selectedMonth
    getMonthYearString() {
      const selectedDate = new Date(this.selectedMonth);
      const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      const month = monthNames[selectedDate.getMonth()];
      const year = selectedDate.getFullYear();
      return `${month} ${year}`;
    },

    // Fungsi untuk mengunduh data ke format PDF
    filterAbsensiByMonth() {
      // Reset halaman ke 1 saat melakukan filter
      this.currentPage = 1;

      // Tambahkan SweetAlert2 di sini
      Swal.fire({
        title: 'Filter Bulan',
        input: 'select',
        inputOptions: {
          '01': 'Januari',
          '02': 'Februari',
          '03': 'Maret',
          '04': 'April',
          '05': 'Mei',
          '06': 'Juni',
          '07': 'Juli',
          '08': 'Agustus',
          '09': 'September',
          '10': 'Oktober',
          '11': 'November',
          '12': 'Desember',
        },
        showCancelButton: true,
        confirmButtonText: 'Filter',
        cancelButtonText: 'Batal',
      }).then((result) => {
        if (result.isConfirmed) {
          this.selectedMonth = result.value;
          // Tambahkan logika lain yang diperlukan setelah filter
        }
      });
    },

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
            const headers = [['Tanggal Absen', 'Jam Masuk', 'Jam Pulang', 'Status Terlambat']];

            // Data
            const data = this.employee.presence.map(presence => {
              const jamPulang = presence.pulang ? presence.pulang : 'Belum Pulang';
              const statusTerlambat = this.isLate(presence.masuk) ? 'Terlambat' : 'Tidak Terlambat';
              return [presence.tgl_absen, presence.masuk, jamPulang, statusTerlambat];
            });

            pdf.autoTable({
              head: headers,
              body: data,
              startY: 20,
              theme: 'striped', // Ganti dengan tema lain jika diinginkan
            });

            pdf.text(`Detail Absensi - ${monthYear}`, 20, 10);
            pdf.save(`detail_absensi_${this.employee.name}_${monthYear}.pdf`);
          } catch (error) {
            Swal.fire('Error', 'Gagal mengunduh PDF.', 'error');
          }

        }
      });
    },

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
          const dataWithNames = this.employee.presence.map((presence) => ({
            ...presence,
            Jam_Pulang: presence.pulang ? presence.pulang : 'Belum Pulang',
            Status_Terlambat: this.isLate(presence.masuk) ? 'Terlambat' : 'Tidak Terlambat',
          }));

          const worksheet = XLSX.utils.json_to_sheet(dataWithNames);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, `Detail Absensi - ${monthYear}`);
          XLSX.writeFile(workbook, `detail_absensi_${this.employee.name}_${monthYear}.xlsx`);
         } catch (error) {
          Swal.fire('Error', 'Gagal mengunduh Excel.', 'error');
         }
        
        }
      });
    },
  },
  beforeRouteUpdate(to, from, next) {
    const employeeUuid = to.params.uuid;
    this.loading = true;
    this.fetchSingleKaryawan(employeeUuid)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
          next();
        }, 1000);
      });
  },
  created() {
    const employeeUuid = this.$route.params.uuid;
    this.fetchSingleKaryawan(employeeUuid).then(() => {
      console.log('Employee data:', this.employee);
    });
  },

  mounted() {
    const employeeUuid = this.$route.params.uuid;
    this.fetchSingleKaryawan(employeeUuid)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  },
  beforeRouteEnter(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },

  beforeRouteUpdate(to, from, next) {
    document.title = 'Absensi online - ' + (to.meta.title || 'Teks Default');
    next();
  },
}
</script>