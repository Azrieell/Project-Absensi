<template>

  <div class="container">
    <div>
      <div
        class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="pt-4">
          <div class="mb-6 pt-2">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NIP</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">USERNAME</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input"
              class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">PASSWORD</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">NAMA</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">TEMPAT
              TANGGAL LAHIR</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">JENIS
              KELAMIN</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input"
              class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">AGAMA</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input"
              class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">ALAMAT</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">NO
              TELEPHONE</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input"
              class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">JABATAN</label>
            <input type="text" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
            <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">PILIH
              FOTO</label>
            <input type="file" id="default-input"
              class="bg-red-50 border-gray-500 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Azriel</td>
              <td>Bandung, 12-12-2005</td>
              <td>Laki-Laki</td>
              <td>Islam</td>
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