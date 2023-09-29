<template>

  <div
    style="width: 100%; height: 60%; background-color: #FC5185; border-radius: 10px;  font-family: 'Fredoka', sans-serif; margin-bottom: 4%;">
    <div class="container">
      <h1 class="text-3xl text-white pl-12 pt-7"><b>Data User</b></h1>
    </div>
  </div>

  <div class="container">
    <div
      class="max-w-full max-h-full p-8 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
      <h1 style="font-family: 'Fredoka', sans-serif; font-size: 15px;"><b>Tambah Akun</b></h1>
      <div class="pt-4">
        <div class="mb-6 pt-2">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Name</label>
          <input type="text" id="name" placeholder="Masukan Email"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Email</label>
          <input type="text" id="email" placeholder="Masukan Email"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
          <label for="default-input"
            class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Password</label>
          <input type="password" id="password" placeholder="Masukan Password"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
          <label for="default-input" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Confirm
            Password</label>
          <input type="password" id="confirmpassword" placeholder="Konfirmasi Password"
            class="bg-white border-gray-500 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg">
          <label for="role" class="block mb-3 text-lg font-medium text-gray-500 dark:text-white">Pilih Role</label>
          <select id="role"
            class="bg-white border border-gray-500 text-gray-600 text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg">
            <option value="US">Admin</option>
            <option value="CA">Karyawan</option>
            <option value="FR">Manager</option>
          </select>
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
            <th>ID</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ROLE</th>
            <th>EDIT</th>
            <th>HAPUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>admin@gmail.com</td>
            <td>rrq team terbaik</td>
            <td>Admin</td>
            <td>
              <router-link to="/editadmin">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg>
                </button>
              </router-link>
            </td>
            <td>
              <button class="bg-red-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3"
                  viewBox="0 0 16 16">
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>