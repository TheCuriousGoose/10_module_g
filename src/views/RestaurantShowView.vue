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
  <header>
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
  </div>
</template>

<style scoped>
header {
  height: 70vh;
}

img {
  width: 100vw;
}
</style>
