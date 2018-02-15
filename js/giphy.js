$(document).ready(function() {
  // Initial array of beaches
  var beaches = [
    "Mexico",
    "Jamaica",
    "Hawaii",
    "Aruba",
    "Belize",
    "Brazil",
    "Cape Town",
    "Bora Bora",
    "Key Largo"
  ];

  // Adding click event listen listener to all buttons
  $(".buttonDiv").on("click", "button", function(event) {
    // Grabbing and storing the data-beach property value from the button
    event.preventDefault();
    var beach = $(this).attr("data-beach");

    // Constructing a queryURL using the beach name
    var queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      beach +
      "+sands&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .done(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;
        var beachDiv = $("<div>");
        // Looping through each result item
        for (var i = 0; i < 10; i++) {
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Creating and storing a div tag

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var beachImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            beachImage.attr("src", results[i].images.fixed_height.url);
            beachImage.attr("data-animate", results[i].images.fixed_height.url);
            beachImage.attr("data-still", results[i].images.fixed_height_still.url);
            beachImage.attr("data-state", "animate");

            // Appending the paragraph and image tag to the beachDiv
            beachDiv.append(p);
            beachDiv.append(beachImage);

            // Prependng the beachDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(beachDiv);
          }
        }
      });
  });

  $(document).on("click", "img", function(event) {
    event.preventDefault();
    var state = $(this).attr("data-state");

    console.dir(this);

    var animateUrl = $(this).attr("data-animate");
    var stillUrl = $(this).attr("data-still");

    if (state === "still") {
      $(this).attr("src", animateUrl);

      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", stillUrl);
      $(this).attr("data-state", "still");
    }

    console.dir($(this));
  });

  $("#add-beach").on("click", function(event) {
    event.preventDefault();
    var newBeach = $("input")
      .eq(0)
      .val();
    var beachbtn = $("<button>");
    beachbtn.addClass("addBtn");
    beachbtn.text(newBeach);
    beachbtn.attr("data-beach", newBeach);
    $(".buttonDiv").append(beachbtn);

    console.log("beach added" + newBeach);
  });
});
