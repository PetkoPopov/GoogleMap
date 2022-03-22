var coor = {}
function initMap() {
    const myLatlng = {lat: 42.635, lng: 24.82};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatlng
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,

    });

    infoWindow.open(map);
    //Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {

        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        coor.lat = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);


        var marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
            title: "very good",
            content: "Pecata"
        })
        marker.addListener('click', () => {
            infoWindow.setContent("Karlovo")
            infoWindow.open(map)
            console.log('hello');
        })

    });


}