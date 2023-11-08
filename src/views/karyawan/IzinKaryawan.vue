<template>
    <div class="flex items-center">
        <div
            class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-2xl pl-16">Keterangan Izin</p>
                </div>
            </div>
            <br>
            <div class="w-full max-w-sm mx-auto rounded-lg">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                    placeholder="Keterangan Izin..."></textarea>
            </div>
            <button
                class="text-white items-center mt-5 mx-20 text-md w-50 font-semibold bg-green-400 py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"><span>Kirim</span>
            </button>
        </div>
    </div>
</template>