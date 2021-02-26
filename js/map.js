function initMap() {
  // Map Options
  var options = {
    zoom: 14,
    center: {
      lat: -26.137999448,
      lng: 28.15166606,
    },
  };

  // New Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Add Marker

  addMarker({
    lat: -26.137999448,
    lng: 28.15166606,
  });

  function addMarker(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  }
}
