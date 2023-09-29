<template>
    <div class="rounded-lg w-90 p-4  border border-gray-200 ml-20 mr-20" style="margin-top: 2%; background-color: #EEEEEE;">
        <div class="container">
            <h5 class="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">Sakit</h5><br>
        </div>

        <div class="w-full max-w-sm  rounded-lg" style="margin-left: 35%;">

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                placeholder="Keterangan tidak hadir"></textarea>
        </div>

        <div class="mt-3" style="margin-left: 35%;">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input
                class="block max-w text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file" style="width: 380px;">
        </div>

        <button type="button" class="text-white mt-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            style="margin-left: 50%; background-color: darkgray;">Kirim</button>

</div></template>