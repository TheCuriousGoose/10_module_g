import { ref } from "vue";

/** @type {{id, name, short_description, content, images, rating, location_name, latitude, longitude}[]} */
const _restaurants = [];

export const restaurants = ref(_restaurants);
