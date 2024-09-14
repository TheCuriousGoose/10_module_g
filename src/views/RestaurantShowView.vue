<script>
import { restaurants } from "@/utils/store";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const restaurant = computed(() =>
  restaurants.value.find((x) => x.id === route.params.id)
);
</script>

<template>
  <h1>{{ restaurant.name }}</h1>
  <p>{{ restaurant.short_description }}</p>
</template>

<style scoped></style>
