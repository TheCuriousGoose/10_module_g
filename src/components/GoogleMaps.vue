<script setup>
import { onMounted } from 'vue';
import { restaurants } from '@/utils/store'

const restaurantsList = restaurants;

const props = defineProps({ restaurant: Object });

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    let position = {
        lat: 45.76,
        lng: 4.835
    };

    if (props.restaurant != null) {
        position = {
            lat: props.restaurant.latitude,
            lng: props.restaurant.longitude
        }
    }

    const map = new Map(document.getElementById("map-container"), {
        zoom: 15,
        maxZoom: 14,
        center: position,
        mapId: 'default',
        behaviour: 'Greedy'
    });

    if (props.restaurant != null) {
        const marker = new AdvancedMarkerElement({
            map: map,
            position: {
                lat: props.restaurant.latitude,
                lng: props.restaurant.longitude
            },
            title: props.restaurant.name
        })
    } else {
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

}

onMounted(async () => {
    initMap();
})

</script>

<template>
    <div id="map-container" class="rounded-lg" style="height: 50rem; width: 100%">

    </div>
</template>