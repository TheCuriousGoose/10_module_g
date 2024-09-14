<script setup>
import { onMounted } from 'vue';

const markerLocations = [
    { lat: 45.7597, lng: 4.8426 },
    { lat: 45.7580, lng: 4.8357 },
    { lat: 45.7582, lng: 4.8325 },
    { lat: 45.7579, lng: 4.8314 },
    { lat: 45.7622, lng: 4.8415 },
    { lat: 45.7590, lng: 4.8422 },
    { lat: 45.7640, lng: 4.8357 },
    { lat: 45.7593, lng: 4.8326 },
    { lat: 45.7608, lng: 4.8321 },
    { lat: 45.7567, lng: 4.8387 },
    { lat: 45.7615, lng: 4.8421 },
    { lat: 45.7589, lng: 4.8343 },
    { lat: 45.7600, lng: 4.8373 },
    { lat: 45.7637, lng: 4.8331 },
    { lat: 45.7570, lng: 4.8310 }
]

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map-container"), {
        zoom: 15,
        center: {
            lat: 45.76,
            lng: 4.835
        },
        mapId: 'default',
    });

    markerLocations.forEach((location) => {
        const marker = new AdvancedMarkerElement({
            map: map,
            position: location
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