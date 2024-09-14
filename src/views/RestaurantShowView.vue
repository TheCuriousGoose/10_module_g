<script>
import { restaurants } from "@/utils/store";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const restaurant = computed(() => restaurants.value);
const load = () => {
  restaurant.value;
};

watch(
  () => route.params,
  () => load(),
  { immediate: true, deep: true }
);
</script>

<template>
  <h1></h1>
</template>

<style scoped></style>
