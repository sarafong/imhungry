//------load maps-API
window.addEventListener('load',function(){

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAQ82u9EX5v0IX5fQAKBWqikHWUWZv1rN0&callback=initMap';
  document.body.appendChild(script);
});

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
