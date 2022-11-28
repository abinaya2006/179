let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to get the location")
    initGeolocation()
})

$(function(){
    $("#navigate-button").click(function(){
        window.location.href=`ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success)
    } else {
        alert("Sorry, your browser doesn't support geolocation services")
    }
}

function success(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 5,
    })

    var img1 = document.querySelector("#gate")

    var marker1 = new mapboxgl.Marker({
        element: img1
    })
        .setLngLat([77.22945605312411, 28.612977912447953])
        .addTo(map)

    var img2 = document.querySelector("#tanjore")

    var marker2 = new mapboxgl.Marker({
        element: img2
    })
        .setLngLat([79.13188935690184, 10.78285154500483])
        .addTo(map)

    var img3 = document.querySelector("#lotus")
    var marker3 = new mapboxgl.Marker({
        element: img3
    })
        .setLngLat([77.25868692243687, 28.55368046029929,])
        .addTo(map)

    var img4 = document.querySelector("#taj")
    var marker4 = new mapboxgl.Marker({
        element: img4
    })
        .setLngLat([78.04221729911764, 27.175307039887088])
        .addTo(map)


    var img5 = document.querySelector("#mahabalipuram")
    var marker5 = new mapboxgl.Marker({
        element: img5
    })
        .setLngLat([80.1969280429728, 12.612251272021048])
        .addTo(map)

    var img6 = document.querySelector("#rock")
    var marker6 = new mapboxgl.Marker({
        element: img6
    })
        .setLngLat([77.55531172539, 8.078243217951854])
        .addTo(map)

    var img7 = document.querySelector("#minar")
    var marker7 = new mapboxgl.Marker({
        element: img7
    })
        .setLngLat([77.1858181073911, 28.525305275461417])
        .addTo(map)

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result',function(e){
            destination= e.result.center
        })
    )

    


}

