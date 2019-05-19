var unirest = require('unirest');

// FINDS NEAREST AIRPORTS TO CITY LOCATION
// unirest.get("https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=Houston")
// .header("X-RapidAPI-Host", "cometari-airportsfinder-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
// .end(function (result) {
//   console.log(result.header, result.status, result.headers, result.body);
// });

// FINDS CITY FOR GIVEN AIRPORT
// unirest.get("https://cometari-airportsfinder-v1.p.rapidapi.com/api/cities/by-airports?code=lax")
// .header("X-RapidAPI-Host", "cometari-airportsfinder-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


//LIVE FLIGHT SEARCH
// unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0")
//   .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
//   .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
//   .header("Content-Type", "application/x-www-form-urlencoded")
//   .send("inboundDate=2019-09-10")
//   .send("cabinClass=business")
//   .send("children=0")
//   .send("infants=0")
//   .send("country=US")
//   .send("currency=USD")
//   .send("locale=en-US")
//   .send("originPlace=SFO-sky")
//   .send("destinationPlace=LHR-sky")
//   .send("outboundDate=2019-09-01")
//   .send("adults=1")
//   .end(function (result) {
//     // console.log(result);
//     var sessionKey = result.headers.location.substr(result.headers.location.lastIndexOf('/') + 1);

//     var cool_link = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/" + sessionKey + "?pageIndex=0&pageSize=10"
//     console.log(cool_link);
//     unirest.get(cool_link)
//     .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
//     .end(function (result) {
//       console.log(result.body);
//     });

//   });


// unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-05-01")
// .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
// .end(function (result) {
//   console.log(result.body.Quotes[0].OutboundLeg.CarrierIds);
// });

// SHOULD GET ROUND TRIP BUT FOR SOME REASON ISN'T WORKING
// unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-05-01?inboundpartialdate=2019-05-04")
// .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

// coolFunction();
// function coolFunction() {
//     unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-05-07?inboundpartialdate=2019-05-09")
//         .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
//         .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
//         .end(function (result) {
//             console.log(result.body.Quotes[0].OutboundLeg.CarrierIds);
//         });
// }

// function sayHello() {
//   console.log("hello");
// }

// function wknd_fs(origin) {
//   // User enters origin
//   // Function searches through round trip prices for several destinations
//   // Function returns cheapest round trip destination and price
// }

// function oneway_search() {
//   return new Promise((resolve, reject) => {
//     unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-06-01?inboundpartialdate=2019-06-03")
//       .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
//       .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
//       .end(function (response) {
//         // sayHello();
//         // console.log(response.status, response.headers, response.body.Quotes[0]);
//         return resolve(response.body);
//       });
//   });
// }

// var obj = oneway_search();
// var flight;
// console.log("starting timer");
// obj.then((body) => flight = body);
// console.log(flight);

// console.log(cool);
// unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-06-01?inboundpartialdate=2019-06-03")
//   .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
//   .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
//   .end(function (result) {
//     // sayHello();
//     console.log(result.status, result.headers, result.body.Quotes[0])
//   });




// unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-06-01?inboundpartialdate=2019-09-01")
// .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
// .end();

var userMarket = "US";
var currency = "USD";
var locale = "en-US";
var origin = "NYCA-sky"; // New york (any airport)
var destiration = "PARI-sky"; // Paris (any airport)
var tomorrow = new Date(new Date().getTime()+2*86400000).toISOString().slice(0, 10);
var afterTomorrow = new Date(new Date().getTime()+(3*86400000)).toISOString().slice(0, 10);
var departureDate = tomorrow; // format yyyy-mm-dd , ie: 2020-01-30
var returnDate = afterTomorrow; // format yyyy-mm-dd , ie: 2020-02-28

var queryString = userMarket + '/' + currency + '/' + locale + '/' +
                 origin + '/' + destiration + '/' + departureDate + '/' + returnDate;
unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/browsequotes/v1.0/" + queryString)
.header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "355a5d425dmsh69871ab7a8b6922p19ec12jsnec5b7a0ac703")
.end(function (result) {
   result.body.Quotes.forEach(q => printFlightSearchResult(q, result.body))
  
});

function printFlightSearchResult( quote, apiResponse)
{
   var places = apiResponse.Places;
   var carriers = apiResponse.Carriers;
   var origOut = places.find(p => p.PlaceId == quote.OutboundLeg.OriginId);
   var destOut = places.find(p => p.PlaceId == quote.OutboundLeg.DestinationId);
  
   var retOrig = places.find(p => p.PlaceId == quote.InboundLeg.OriginId);
   var retDest = places.find(p => p.PlaceId == quote.InboundLeg.DestinationId);
   var oneWayCarrier = carriers.find(c => c.CarrierId == quote.OutboundLeg.CarrierIds[0]);
   var returnCarrier = carriers.find(c => c.CarrierId == quote.InboundLeg.CarrierIds[0]);

   console.log(`The cheapest ${quote.Direct ? "" : "in"}direct flight is
   on ${quote.OutboundLeg.DepartureDate}
   from ${origOut.CityName} (${origOut.IataCode} - ${origOut.Name}) ` +
   `to ${destOut.CityName} (${destOut.IataCode} - ${destOut.Name})
   operated by ${oneWayCarrier.Name}
   and returning
  
   on ${quote.InboundLeg.DepartureDate}
   from ${retOrig.CityName} (${retOrig.IataCode} - ${retOrig.Name}) `+
   `to ${retDest.CityName} (${retDest.IataCode} - ${retDest.Name})
   operated by ${returnCarrier.Name}
   will cost you ${quote.MinPrice} ${apiResponse.Currencies[0].Code}
   `);
}