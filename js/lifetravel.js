$(document).ready(function(){
   

    $("#weatherSearch").on("click", function(event){
    	event.preventDefault();
     
        var appID = "3c928fc95e9915807e894de66361755c";
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?";
        var queryString = $.param({
            q: $("#weatherInput").val(),
            appid: appID
        });

        

        $.ajax({
            url: apiURL + queryString,
            method: "GET"
        }).done(function(response){
          
            $("#city").html("<h1>" + "City Name: " + response.name + "</h1>");
            $("#wind").text("Wind Speed: " + response.wind.speed);
            $("#humidity").text("Humidity: " + response.main.humidity);
            $("#temp").html("Temperature: " + parseInt((9/5) * (response.main.temp - 273) + 33) + '&deg;F ' + (parseInt(response.main.temp - 273.15)) + '&deg;C ' + response.main.temp + '&deg;K ')

        }).fail(function (error) {
            // log the error so we know when it doesn't work
         
            $("#error").text("Error. Please try again.")

        })
    });

});

$(document).ready(function() {
   



    var currencyQueryURL = "http://www.apilayer.net/api/live?access_key=3a9198bf3feebaee79f8a0513601a325";

    var airQualityQueryURL = "https://api.waqi.info/feed/shanghai/?token=e08aa62141cab1b9ad7597b1af9ebdead16435fd";

    var weatherURL = "https://wunderground.com/" + "&y=&plot=short&apikey=9e5b268d945691e1";

    var submitButton = $('#add_topic');

    var searchInput = $('#search_input');

    var currencyConverter = $("currencyConverter");

   
    $("#add_topic").on("click", function(event) {
        event.preventDefault();
       

        function destinationAjaxCall() {
            var destination = $(this).attr("data-name");
            var searchTerm = searchInput.val()
           
            var destinationURL = "https://restcountries.eu/rest/v2/name/" + searchTerm + "?fullText=true"

            $.ajax({
                url: destinationURL,
                method: "GET"
            }).done(function(response) {


                var currencyCode = response[0].currencies[0].code;
                var currencyName = response[0].currencies[0].name;
                var languageName = response[0].languages[0].name;


                $("#search-results").append("<p>" + currencyCode + "</p>")
                $("#search-results").append("<p>" + currencyName + "</p>")
                $("#search-results").append("<p>" + languageName + "</p>")
                currencyAjaxCall(currencyCode);

            });
        }


        function currencyAjaxCall(currencyCode) {
            var currency = $(this).attr("data-name");
            var searchCurrency = searchInput.val()
            var currencyQueryURL = "https://www.apilayer.net/api/live?access_key=3a9198bf3feebaee79f8a0513601a325&currencies="+ currencyCode;



            $.ajax({
                url: currencyQueryURL,
                method: "GET"
            }).done(function(response) {
                $("#search-results").append("<p>" + response.quotes["USD"+ currencyCode] + "</p>")
            });

        }

        destinationAjaxCall();

    });

    // http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}


        $("#airQualitySearch").on("click", function(event){

        $.ajax({
            url: "https://api.airvisual.com/v2/nearest_city?key=kc8HoCbvK9K9umMtf",
            method: "GET"
        }).done(function(response){
            $("#airPollution").text("Air Pollution: " + response.data.current.pollution.aqius)
        }).fail(function(error){
            $("#airQualityError").text("Error. Please try again.")
        })
    });


});




