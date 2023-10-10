<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7 mb-10"><b>Tambah Akun Karyawan</b></h1>
    </div>
  </div>

  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Akun Karyawan</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Name</label>
          <input type="text" id="name" placeholder="Masukan Nama"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
          <input type="text" id="email" placeholder="Masukan Email"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input"
            class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
          <input type="password" id="password" placeholder="Masukan Password"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Confirm
            Password</label>
          <input type="password" id="confirmpassword" placeholder="Konfirmasi Password"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
          <input type="text" class="hidden" value="admin" disabled>
          <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px; margin-top: 25px; margin-bottom: 15px;"><b>Isi Data Karyawan</b></h1>
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
            <label for="role" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Pilih Jabatan</label>
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
    </div>
  </div>
</template>