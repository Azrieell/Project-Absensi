<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif; margin-bottom: 4%;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Karyawan</b></h1>
    </div>
  </div>

  <div class="container">
    <router-link @click="scrollToTop" to="/admin/datakaryawan/tambah">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        Tambah Karyawan
      </button>
    </router-link>
    <div>
      <div
        class="max-w-full max-h-full p-8 overflow-x-auto bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
        <table>
          <thead>
            <tr>
              <th>NIP</th>
              <th>NAMA</th>
              <th>TTL</th>
              <th>JENIS KELAMIN</th>
              <th>AGAMA</th>
              <th>ALAMAT</th>
              <th>NO TELEPON</th>
              <th>JABATAN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Azriel</td>
              <td>Bandung, 12-12-2005</td>
              <td>Laki-Laki</td>
              <td>Islam</td>
              <td>Bandung</td>
              <td>0879521262</td>
              <td>CEO</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
    </div>
  </div>

</template>


<style>
  table {
    font-family: 'Fredoka', sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid white;
    text-align: left;
    padding: 8px;
  }
</style>

<script>
export default {
    methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
  }
</script>