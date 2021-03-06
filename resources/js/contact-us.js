import Alpine from "alpinejs";

window.Alpine = Alpine;

let latitude;
let longitude;
let coordinates;
let map;
let marker;

document.addEventListener("alpine:init", () => {
    window.Alpine.store("coordinates", {
        initLatitudeLongitude(latitude_value, longitude_value) {
            latitude = parseFloat(latitude_value);
            longitude = parseFloat(longitude_value);
        },
        setLatitudeLongitude(latitude_value, longitude_value) {
            latitude = parseFloat(latitude_value);
            longitude = parseFloat(longitude_value);

            document.getElementById("map").scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        },
    });
});

window.initMap = function () {
    coordinates = new google.maps.LatLng(latitude, longitude);

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 13,
        disableDefaultUI: false,
        styles: [
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ADB9E0",
                    },
                ],
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        color: "#808080",
                    },
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#b3b3b3",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#ffffff",
                    },
                    {
                        weight: 1.8,
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#d7d7d7",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#ebebeb",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#a7a7a7",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#efefef",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#696969",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#4058AA",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#d6d6d6",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {},
            {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#dadada",
                    },
                ],
            },
        ],
    });

    marker = new google.maps.Marker({
        position: coordinates,
        map,
    });
};
