<script setup>
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
    <div class="bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4">Item Details</h1>
      <p>
        <strong>ID:</strong> <span id="id">{{ restaurant.id }}</span>
      </p>
      <p>
        <strong>Name:</strong> <span id="name">{{ restaurant.name }}</span>
      </p>
      <p>
        <strong>Short Description:</strong>
        <span id="short_description">{{ restaurant.short_description }}</span>
      </p>
      <p>
        <strong>Content:</strong>
        <span id="content">{{ restaurant.content }}</span>
      </p>

      <h2 class="text-xl font-semibold mt-4">Images</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <img
          v-for="image in restaurant.images"
          :src="image"
          :alt="restaurant.name"
          class="rounded"
        />
      </div>

      <h2 class="text-xl font-semibold mt-4">Rating</h2>
      <div class="rating">
        <span>⭐⭐⭐⭐⭐</span>
        <span>({{ restaurant.rating }})</span>
      </div>

      <h2 class="text-xl font-semibold mt-4">Location</h2>
      <p>
        <strong>Location Name:</strong>
        <span id="location_name">{{ restaurant.location_name }}</span>
      </p>
      <p>
        <strong>Latitude:</strong>
        <span id="latitude">{{ restaurant.latitude }}</span>
      </p>
      <p>
        <strong>Longitude:</strong>
        <span id="longitude">{{ restaurant.longitude }}</span>
      </p>

      <h2 class="text-xl font-semibold mt-4">Categories</h2>
      <ul id="categories" class="list-disc pl-5">
        <li v-for="category in restaurant.categories">{{ category }}</li>
      </ul>
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
