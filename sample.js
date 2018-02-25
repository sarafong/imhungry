//var fs = require('fs');
/*
var readMe = fs.readFileSync('./readMe.txt', 'utf8' );
console.log(readMe);
*/

/*var fs = require('fs'),
    byline = require('byline');

var stream = fs.createReadStream('readMe.txt', 'utf8');
stream = byline.createStream(stream);

stream.on('data', function(line) {
    console.log(line);
});*/

var radius;
var category;
var price;

var fs = require('fs');
var array = fs.readFileSync('readMe.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}

radius=parseInt(array[0]);
category=array[1];
price=array[2];


'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'Y6WA9D0kzh65ygw0RMQOcaxFAnwZy_miJ6fQY38GjAeXkGXJYLjVA7rdzgCLs5qsvG6ZYO9zF_2honCL6iym6JZSwv-m0DyuGv7bLVV3iCwZ2mOp2L3un0pUwseRWnYx';


const searchRequest = {
  category: category,
  location: 'toronto, on',
  radius: radius
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  setLongLat(firstResult);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

var location;
function setLongLat(firstResult){
  const latitude = JSON.stringify(firstResult.coordinates.latitude);
  const longitude = JSON.stringify(firstResult.coordinates.longitude);
  location = latitude + "\n" + longitude;
    fs.writeFile('location.txt', location, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

// success case, the file was saved
    console.log('Writing to file - success!');
});
}

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname )).listen(8080, function(){
    console.log('Server running on 8080...');
});



