function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 16
    });
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //      infoWindow.setPosition(pos);
            //      infoWindow.setContent('Itt vagyok.');


            map.setCenter(pos);

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Jelenlegi pozícióm!'
            });


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

// A progress folyamat állása
function changeProgress(progress) {

    if (!progress) {
        progress = document.querySelector(".progress-value").value;
    }

    progress = progress.replace(/[^0-9\.]/g, "");

    console.log(progress);
    progress = parseFloat(progress);
    if (!progress || isNaN(progress)) {
        return;
    }
    var bar = document.querySelector('.progress .progress-bar');
    bar.style.width = progress + "%";
}