<template>
    <RouterLink class="da relative flex flex-col justify-center overflow-hidden"
        :to="{ name: 'show', params: { id: restaurant.id } }">
        <div class="absolute inset-0 bg-center"></div>
        <div class="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div
                class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img :src="restaurant.images?.[0]"
                    class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt="" />
            </div>
            <div
                class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 class="font-serif text-2xl font-bold text-white ">
                    {{ restaurant.name }}
                </h1>
                <h1 class="text-sm font-light text-gray-200 shadow-  pe-10">
                    {{ restaurant.short_description }}
                </h1>
            </div>
        </div>
    </RouterLink>
</template>
  
<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    restaurant: {
        type: Object,
        required: true
    }
});
</script>
