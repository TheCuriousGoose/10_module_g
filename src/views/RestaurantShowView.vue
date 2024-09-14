<script setup>
import GoogleMaps from "@/components/GoogleMaps.vue";
import { restaurants } from "@/utils/store";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const restaurant = computed(() =>
  restaurants.value.find((x) => x.id === parseInt(route.params.id))
);

const currentImage = ref(0);
const timer = setInterval(() => {
  currentImage.value =
    (currentImage.value + 1) % restaurant.value.images.length;
}, 5000);
onUnmounted(() => clearInterval(timer));
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
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-3xl font-bold mb-2 text-center text-blue-600">
        {{ restaurant.name }}
      </h1>
      <p class="text-center mb-4 text-gray-700">
        {{ restaurant.short_description }}
      </p>
      <div class="flex">
        <div class="content">
          <div class="image-holder relative flex flex-col">
            <img
              v-for="(image, i) in restaurant.images"
              :src="image"
              :alt="restaurant.name"
              class="absolute inset-4 rounded shadow-md duration-500"
              :class="[currentImage === i ? 'opacity-100' : 'opacity-0']"
            />
          </div>

          <p class="max-w-lg text-gray-700">
            {{ restaurant.content }}
          </p>

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
        <div class="map">
          <GoogleMaps :restaurant="restaurant"></GoogleMaps>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  height: 70vh;
}

.image-holder {
  height: 400px;
}

.image-holder img {
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  object-fit: cover;
}

.content {
  width: 50%;
}
.map {
  width: 50%;
  flex-shrink: 0;
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
