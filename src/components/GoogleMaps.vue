<script setup>
import { onMounted } from 'vue';
import { restaurants } from '@/utils/store'

const restaurantsList = restaurants;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map-container"), {
        zoom: 15,
        maxZoom: 14,
        center: {
            lat: 45.76,
            lng: 4.835
        },
        mapId: 'default',
        behaviour: 'Greedy'
    });

    restaurantsList.value.forEach((restuarant) => {
        const marker = new AdvancedMarkerElement({
            map: map,
            position: {
                lat: restuarant.latitude,
                lng: restuarant.longitude
            },
            title: restuarant.name
        })
    })
}

onMounted(async () => {
    initMap();
})

</script>

<template>
    <div id="map-container" class="rounded-lg" style="height: 50rem; width: 100%">

    </div>
</template>