//------load maps-API
window.addEventListener('load',function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAQ82u9EX5v0IX5fQAKBWqikHWUWZv1rN0&callback=initMap';
    document.body.appendChild(script);
});
var latitude=5;
var longitude=5;

firebase.database().ref().on('value',function(snapshot){
  latitude = (snapshot.val().Latitude);
  longitude = (snapshot.val().Longitude);
  initMap();
});
function initMap(){
  setTimeout(function(){
    //map location
    console.log(latitude);
    console.log(longitude);
    longitude = parseFloat(longitude);
    latitude = parseFloat (latitude);
    var myLoc = {lat: latitude, lng: longitude};
    //map options
    var options = {
        zoom:15,
        center: myLoc
    };
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);
    //add marker
    var marker  = new google.maps.Marker({
        position: myLoc,
        map: map
    });

  }, 1000);
}
