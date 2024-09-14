<script>
import { restaurants } from "@/utils/store";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// const restaurant = computed(() =>
//   restaurants.value.find((x) => x.id === parseInt(route.params.id))
// );
// onMounted(() => {
//   console.log(route.params);
// });
console.log(useRoute());
setTimeout(() => console.log(useRoute()), 1000);
</script>

<template>
  <!-- <h1>{{ restaurant.name }}</h1> <p>{{ restaurant.short_description }}</p> -->
  <h1>Hello</h1>
</template>

<style scoped></style>
