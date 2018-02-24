const latitude = 43.8561;
const longitude = -79.3370;
function initMap(){
  //map location
  var myLoc = {lat: latitude, lng: longitude};
  //map options
  var options = {
    zoom:10,
    center: myLoc
  };
  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);
  //add marker
  var marker  = new google.maps.Marker({
    position: myLoc,
    map: map
  });
}
