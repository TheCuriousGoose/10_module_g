<script setup>
import GoogleMaps from '@/components/GoogleMaps.vue';
import Card from '@/components/Card.vue';
import SearchBar from '@/components/SearchBar.vue'
import { restaurants } from '@/utils/store';
</script>

<template>
  <main class="md:container mx-auto">
    <div class="grid grid-cols-3 gap-40">
      <div class="col-span-2">
        <h4 class="text-3xl font-bold mx-auto mt-24 text-center">
          Restaurants In Lyon
        </h4>
        <div class="mt-8">
          <SearchBar />
        </div>

        <div class="grid grid-cols-2 gap-2 gap-y-4 mt-8">
          <Card v-for="(restaurant, index) of restaurants" :key="index" :restaurant="restaurant"></Card>
        </div>
      </div>
      <div class="">
        <p class="sticky top-4">
          <GoogleMaps></GoogleMaps>
        </p>
      </div>
    </div>

  </main>
</template>
