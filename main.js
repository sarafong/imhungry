function initMap(){
  //map location
  var myLoc = {lat: -25.363, lng: 131.044};
  //map options
  var options = {
    zoom:6,
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
