<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif; margin-bottom: 4%;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data Karyawan</b></h1>
    </div>
  </div>

  <div class="container">
    <div>
      <div
        class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="pt-4">
          <div class="mb-6 pt-2">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NIP</label>
            <input type="text" id="nip" placeholder="Masukan NIP"
              class="bg-white border-gray-500 text-sm focus:ring-gray-300 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NAMA</label>
            <input type="text" id="name" placeholder="Masukan Nama"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">TEMPAT
              TANGGAL LAHIR</label>
            <input type="text" id="ttl" placeholder="Masukan Tempat Tanggal Lahir"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">JENIS
              KELAMIN</label>
            <input type="text" id="jk" placeholder="Masukan Jenis Kelamin"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">AGAMA</label>
            <input type="text" id="agama" placeholder="Masukan Agama"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input"
              class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">ALAMAT</label>
            <input type="text" id="alamat" placeholder="Masukan Alamat"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">NO
              TELEPHONE</label>
            <input type="text" id="telp" placeholder="Masukan Nomor Telepon"
              class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="role" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Pilih Role</label>
            <select id="role"
              class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg mb-4">
              <option value="admin">Admin</option>
              <option value="karyawan">Karyawan</option>
              <option value="manager">Manager</option>
            </select>
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">PILIH
              FOTO</label>
            <input type="file" id="foto"
              class="bg-white border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <br>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Simpan
            </button>
          </div>
        </div>
      </div>
      <br>
      <div
        class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
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