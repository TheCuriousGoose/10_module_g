<script setup>
import { ref, computed } from 'vue';
import GoogleMaps from '@/components/GoogleMaps.vue';
import Card from '@/components/Card.vue';
import { restaurants } from '@/utils/store';

const search = ref('');
const category = ref('All');

const filteredRestaurants = computed(() => {
  const query = search.value.toLowerCase();
  const selectedCategory = category.value;

  return restaurants.value.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(query) ||
      restaurant.content.toLowerCase().includes(query) ||
      restaurant.short_description.toLowerCase().includes(query);

    const matchesCategory = selectedCategory === 'All' || restaurant.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });
});

const uniqueCategories = computed(() => {
  const allCategories = restaurants.value.flatMap(restaurant => restaurant.categories);
  const uniqueCategoriesSet = new Set(allCategories);
  return Array.from(uniqueCategoriesSet).sort();
});
</script>

<template>
  <main class="md:container mx-auto">
    <div class="grid grid-cols-3 gap-40">
      <div class="col-span-2">
        <h4 class="text-3xl font-bold mx-auto mt-24 text-center">
          Restaurants In Lyon
        </h4>
        <div class="mt-8">
          <form class="flex flex-col md:flex-row gap-3 mx-auto">
            <div class="flex flex-1">
              <input type="text" placeholder="Search for restaurants you like"
                class="w-full md:w-80 px-3 h-10 rounded border-2 border-slate-500 focus:outline-none focus:border-slate-500 flex-1"
                v-model="search" />
            </div>
            <select id="categoryFilter" name="categoryFilter"
              class="w-120 h-10 border-2 border-slate-500 focus:outline-none focus:border-slate-500 text-slate-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              v-model="category">
              <option value="All" selected>
                All
              </option>
              <option v-for="(category, index) of uniqueCategories" :key="index">
                {{ category }}
              </option>
            </select>
          </form>
        </div>

        <div class="grid grid-cols-2 gap-2 gap-y-4 mt-8">
          <Card v-for="(restaurant, index) of filteredRestaurants" :key="index" :restaurant="restaurant"></Card>
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
