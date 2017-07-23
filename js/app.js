//model stores all attractions and their data
var model = {
    currentMarker: null,
    markers: [
{
	title: "Eiffel Tower",
	lat: 48.858490,
	lng: 2.294631,
	city: "Paris",
	country: "France",
	wikiname: "Eiffel_Tower"
},
{
	title: "Big Ben",
	lat: 51.500939, 
	lng: -0.124604,
	city: "London",
	country: "United Kingdom",
	wikiname: "Big_Ben"
},
{
	title: "Statue of Liberty",
	lat: 40.689461,
	lng: -74.044575,
	city: "New York",
	country: "The United States of America",
	wikiname: "Statue_of_Liberty"
},
{
    title: "The White Hoouse",
    lat: 38.897968,
    lng: -77.036562,
    city: "Washington",
    country: "The United States of America",
    wikiname: "The_White_House"
},
{
	title: "Maidan Nezalezhnosti",
	lat: 50.450914,
	lng: 30.523645,
	city: "Kiev",
	country: "Ukraine",
	wikiname: "Kiev"
},
{
	title: "Theater of Opera and Ballet",
	lat: 46.485649,
	lng: 30.741158,
	city: "Odessa",
	country: "Ukraine",
	wikiname: "Odessa"
},
{
	title: "Giza Pyramids and Sphinx",
	lat: 29.977575,
	lng: 31.132463,
	city: "Giza",
	country: "Egypt",
	wikiname: "Giza_Pyramids"
},

{
	title: "Colosseum",
	lat: 41.890434,
	lng: 12.492210,
	city: "Rome",
	country: "Italy",
	wikiname: "Colosseum"
},
{
	title: "Stonehenge",
	lat: 51.179138,
	lng: -1.826334,
	city: "Amesbury",
	country: "United Kingdom",
	wikiname: "Stonehenge",
},
{
	title: "Frogner Park",
	lat: 59.924909, 
	lng: 10.707024,
	city: "Oslo",
	country: "Norway",
	wikiname: "Oslo"
},
{
	title: "Bran Castle",
	lat: 45.515082,
	lng: 25.367132,
	city: "Bran",
	country: "Romania",
	wikiname: "Bran"
},
{
	title: "Brandenburg Gate",
	lat: 52.516445,
	lng: 13.377768,
	city: "Berlin",
	country: "Germany",
	wikiname: "Berlin"
},
{
	title: "Malbork Castle",
	lat: 54.039989,
	lng: 19.027852,
	city: "Malbork",
	country: "Poland",
	wikiname: "Malbork"
},
{
	title: "Kilimanjaro",
	lat: -3.068097,
	lng: 37.327138,
	city: "Mount Kilimanjaro National Park",
	country: "Tanzania",
	wikiname: "Mount_Kilimanjaro"
},
{
	title: "Niagara Falls",
	lat: 43.083035,
	lng: -79.074045,
	city: "New York",
	country: "The United States of America",
	wikiname: "Niagara_Falls"
},
{
	title: "Golden Gate Bridge",
	lat: 37.819925,
	lng: -122.478276,
	city: "San Francisco",
	country: "The United States of America",
	wikiname: "Golden_Gate_Bridge"
},
{
	title: "Grand Canyon",
	lat: 36.099709,
	lng: -112.111356,
	city: "Arizona",
	country: "The United States of America",
	wikiname: "Grand_Canyon"
},
{
	title: "Pyramid of the Sun",
	lat: 19.692134,
	lng: -98.842418,
	city: "Teotihuacán",
	country: "Mexico",
	wikiname: "Teotihuacan"
},
{
	title: "Victoria Harbour",
	lat: 48.421736,
	lng: -123.368578,
	city: "British Columbia",
	country: "Canada",
	wikiname: "British Columbia"
},
{
	title: "El Escorial", 
	lat: 40.590347,
	lng: -4.147425,
	city: "Madrid",
	country: "Spain",
	wikiname: "El_Escorial"
},
{
	title: "Hollywood", 
	lat: 34.131094,
	lng: -118.320607,
	city: "Los Angeles",
	country: "The United States of America",
	wikiname: "Hollywood"
},
{
	title: "Jerusalem Old City", 
	lat: 31.776674,
	lng: 35.233763,
	city: "Jerusalem",
	country: "Israel",
	wikiname: "Jerusalem"
},
{
	title: "Tijuca Forest", 
	lat: -22.957706,
	lng: -43.278478,
	city: "Rio de Janeiro",
	country: "Brazil",
	wikiname: "Rio_de_Janeiro"
}
]
};
var ViewModel = function() {
    var map, bounds, markerArray;
    var self = this;
    //initializing the map
    var initMap = function() {
        var mapOptions = {
            zoom: 8
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var myLatlng = new google.maps.LatLng(35.8964841,-72.561833);
        var bounds = new google.maps.LatLngBounds();
        //creating observable array of map markers
        self.markerArray = ko.observableArray();
         var markerList = model.markers;
         for(var x = 0; x < markerList.length; x++) {
            var markPos = new google.maps.LatLng(
                markerList[x].lat,
                markerList[x].lng
            );
         var loc = markerList[x].lat + "," + markerList[x].lng;
      var place = markerList[x].title + "," + markerList[x].city;
      var gapikey = 'AIzaSyA0cJunFi4t6RaZoxEP1Ps1l9wxj_dZ1x8';
      var imgsource ='http://maps.googleapis.com/maps/api/streetview?size=300x200&location=' + loc + '&key=' + gapikey + '';
      var image = '<img src="' + imgsource +'" align="left">'
      var hotelssource = 'http://www.yelp.co.uk/search?find_desc=hotels&find_loc=' + "," + place + '&ns=1';
      var hotels = '<a  target="_blank" href="' + hotelssource +'">Check the best hotels nearby</a>';
      var wikiurl = 'http://wikitravel.org/en/' + markerList[x].wikiname + '';
      var wiki = '<a  target="_blank" href="' + wikiurl +'">Get More info about ' + markerList[x].title + '</a>';
      //content for infowindow
      var content = "<div id='all'>" + "<div id='info'>" + "<div id='textinfo'>" + "<h2>" + markerList[x].title + "</h2>" + markerList[x].city + "<br>" + markerList[x].country + "<p>" + wiki + "</p>" + "<p>" + hotels +  "</p>" + "</div>" + "</div>" + "<div id='pic'>" + image + "</div>" + "</div>";
      var description = "<p>" +  markerList[x].title + "</p>" + "<span>" + markerList[x].city + ", " + markerList[x].country + "</span>";
      //adding all necessary data to markers
         var marker = new google.maps.Marker({
            position: markPos,
            map: map,
            title: markerList[x].title,
            content: content,
            description: description,
            wikiname: markerList[x].wikiname,
            city: markerList[x].city,
            animation: google.maps.Animation.DROP
        });

      var infowindow = new google.maps.InfoWindow({
        content: null
    });
      //on clicking the marker infowindow with its content opens
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.content)
        infowindow.open(map, this);
        map.setZoom(4);
        map.setCenter(marker.getPosition());
        $('#wiki').hide();
        $('#photos').hide();
      });
      //on clicking the location in the list view, its infowindow opens
      this.clickHandler = function(data) { 
        infowindow.setContent(data.content)
        infowindow.open(map, data);
        map.setZoom(4);
        map.setCenter(marker.getPosition());
        $('#wiki').hide();
        $('#photos').hide();
};
     
      bounds.extend(markPos);
      map.fitBounds(bounds);
      map.setCenter(bounds.getCenter());
    
      var listener = google.maps.event.addListener(map, "idle", function () {
    map.setZoom(3);
    google.maps.event.removeListener(listener);
});

      self.markerArray.push(marker);
    }   
  }();
//saving user's serach input as observable
self.filterM = ko.observable("");
self.index = ko.observable("-1");
//hiding div with no search results
self.displayResults = ko.observable(false)
var $results = $('#results');
//searching for results after user clicks GO button
getResults = function(){
  $results.text("");
for(var x = 0, len = self.markerArray().length; x < len; x++) {
	//checking if user's search corresponds with any attraction's name
    if (self.markerArray()[x].title === self.filterM()) {
        self.index(x);
        self.displayResults(false);
        break;
    }
    //checking if user's search corresponds with any attraction's city
    else if (self.markerArray()[x].city === self.filterM()) {
        self.index(x);
        self.displayResults(false);
        break;
    }
    // if not - displaying div with no search results
    else {
      self.displayResults(true);
    }
}
}
};
var wikiHTML = ko.observable("");
//Fetching data from Wikipedia when user clicks more info button in the list view 
moreInfo = function(marker){
  console.log(marker);
  var $wiki = $('#wiki');
  //showing 'wiki' div
  $wiki.show();
  $wiki.text("");
  //hiding 'photo' div
  $('#photos').hide();
  //getting short description of the atttraction from wikipedia
  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.wikiname + '&format=json&callback=wikiCallback';
  $.ajax( {
  url: wikiUrl,
  dataType: "jsonp",
  success: function( response ) {
      var article = response[1][0];
      var description = response[2][0];
      var articleUrl = response[3][0];
      if (description === undefined) {
        $wiki.append("<p>Sorry, no additional information found</p>");
      }
       else {
        $wiki.prepend("<p><a target='_blank' href='" + articleUrl + "'>" + article + "</a> - " +
      description + "</p>");
      }
    },
    //handling errors
  error: function() {
    $wiki.append("<p>Sorry, no additional information found</p>");
  }
});
  var wikiUrl2 = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.city + '&format=json&callback=wikiCallback';
  //getting the list of other articles about the atttraction from wikipedia
  $.ajax( {
  url: wikiUrl2,
  dataType: "jsonp",
  success: function( response ) {
      var articleList = response[1];
        for (var i = 0; i < articleList.length; i++) {
            var artLink = response[3][i];
            var artTitle = articleList[i];
            $wiki.append('<li><a target="_blank" href="' + artLink + '">' + artTitle + '</a></li>');
            if ( i == 2 ) return false;target='_blank' 
      }
    },
    //handling errors
  error: function() {
    $wiki.append("<p>Sorry, no additional information found</p>");
  }
});
};
//getting attractions photos from flickr
getPhotos = function(marker){
  console.log(marker);
  var $photos = $('#photos');
  //showing 'photos' div
  $photos.show();
  //hiding 'wiki' div
  $('#wiki').hide();
  $photos.text("");
  var flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b8ee668ced9ea2de5e0e6f0d5a90a8b4&text=' + marker.title + '&sort=relevance';
  var src;
$.getJSON(flickrUrl + "&format=json&jsoncallback=?", function(data){
    $.each(data.photos.photo, function(i,item){
        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
        $("<img/>").attr("src", src).appendTo("#photos");
        if ( i == 2 ) return false;
    });
});
};
ko.applyBindings(new ViewModel());
