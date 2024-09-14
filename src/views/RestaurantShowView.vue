<script setup>
import GoogleMaps from "@/components/GoogleMaps.vue";
import { restaurants } from "@/utils/store";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const restaurant = computed(() =>
  restaurants.value.find((x) => x.id === parseInt(route.params.id))
);
</script>

<template>
  <!-- <header>
    <div>
      <img v-for="image in images" :key="image" :src="image" :alt="image" />
    </div>
  </header>
  <div class="flex mx-auto max-w-xl">
    <main>
      <h1>{{ restaurant.name }}</h1>
      <p>{{ restaurant.content }}</p>
    </main>
    <aside>
      <p>
        <span v-for="category in restaurant.categories">{{ category }}</span>
      </p>
      <p>{{ restaurant.short_description }}</p>
      <p>{{ restaurant.location_name }}</p>
    </aside>
  </div> -->

  <div class="container mx-auto p-5">
    <div class="flex bg-white shadow-lg rounded-lg p-6">
      <div>
        <h1 class="text-3xl font-bold mb-4 text-center text-blue-600">
          {{ restaurant.name }}
        </h1>
        <p class="text-gray-700"><strong>ID:</strong> {{ restaurant.id }}</p>
        <p class="text-gray-700">
          <strong>Short Description:</strong> {{ restaurant.short_description }}
        </p>
        <p class="text-gray-700">
          <strong>Content:</strong> {{ restaurant.content }}
        </p>

        <h2 class="text-2xl font-semibold mt-4">Images</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <img
            v-for="image in restaurant.images"
            :src="image"
            :alt="'Image ' + (restaurant.images.indexOf(image) + 1)"
            class="rounded shadow-md"
          />
        </div>

        <h2 class="text-2xl font-semibold mt-4">Rating</h2>
        <div class="rating">
          <span
            v-for="star in 5"
            :key="star"
            :class="{
              'text-gold': star <= restaurant.rating,
              'text-gray-300': star > restaurant.rating,
            }"
            >★</span
          >
          <span class="ml-2">({{ restaurant.rating }})</span>
        </div>

        <h2 class="text-2xl font-semibold mt-4">Location</h2>
        <p class="text-gray-700">
          <strong>Location Name:</strong> {{ restaurant.location_name }}
        </p>
        <p class="text-gray-700">
          <strong>Latitude:</strong> {{ restaurant.latitude }}
        </p>
        <p class="text-gray-700">
          <strong>Longitude:</strong> {{ restaurant.longitude }}
        </p>

        <h2 class="text-2xl font-semibold mt-4">Categories</h2>
        <ul class="list-disc pl-5">
          <li v-for="category in restaurant.categories" :key="category">
            {{ category }}
          </li>
        </ul>
      </div>
      <div>
        <GoogleMaps></GoogleMaps>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  height: 70vh;
}

img {
  width: 100vw;
}

.rating {
  display: flex;
  gap: 2px;
}
.rating span {
  color: gold;
}
</style>
