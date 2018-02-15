
var keys = require("./keys.js");
var request = require("request");
var Twit = require('twit');

console.log('the bot is starting!');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);{


  tokens.ConsumeKey = 'RaiddoQz2kAgcOkKH2G6R8V4J',
  tokens.consumerSecret = 'u40qIKzRy45mzWyQv9u1SOx15ZLCfN4y7suFcTrf2p7Bm01ZZj',
  tokens.accessToken = '942180081199435776-vtL77uMfmVEkpP4Ywa3v6jMXjOSCSnr',
  tokens.accessToken = 'EnoWZJr9zbg3PQOXanAQXo0Bb1Laq7MnM4kZ9JuKSCi5G';

}


function getTwit () {
  var params = {jpbuzz73: 'nodejs', count: 5};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (i=0; i<tweets.length; i++){
          var eachtweettext = tweets[i].text;
          console.log(eachtweettext)

  type = "message_create",
  id = "1234858592",
  created_timestamp = "1392078023603",
  initiated_via = {
    "tweet_id": "123456",
    "welcome_message_id": "456789"
  },
  message_create = {
    "target": {
      "recipient_id": "1234858592"
    },
    "sender_id": "3805104374",
    "source_app_id": "268278",
    "message_data": {
      "text": "Blue Bird",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "urls": [],
        "user_mentions": [],
      },
      "quick_reply_response": {
        "type": "options",
        "metadata": "external_id_2"
      },
      "attachment": {
        "type": "media",
        "media": {
        }
      }



 // Tweet function, uses the Twitter module to call the Twitter api
 // for (var i = 0; i < 10; i++) {
 //   console.log(i);
 // }
 // loadLatestTweet()
 // client.get('statuses/user_timeline', params, function gotData(error, tweets, response) {
 //   if (error) {
 //     console.log('error:', error);
 //   } else {
 //     for (let status in tweets) {
 //       console.log("\n" + tweets[status].text + "\n");

 //       // tweetData = tweets[status].text.trim()
 //       // newLog.appendData(tweetData);
 //     }
 //   }
 // });;



// var Spotify = require('node-spotify-api');
// var spotify = new Spotify({
//   id: "b0727231dd124421b34d83f0d7bf1298",
//   secret: "f79c8b229f5840a3acb95418c965c5d8"
// });
// var userSongInput = "";

// function getSpotify (song) {
//     inquirer.prompt([
//       {
//         name: "song",
//         message: "What song would you like to search?"
//       }
//     ])
//     .then(function (song) {
//         userSongInput = song.song;
//         spotify
//         .search({ 
//           type: 'track', 
//           query: userSongInput, 
//           limit: 3,
//         })
//         .then(function(response) {
//           var response = response.tracks.items;
//           for (var i=0; i<response.length; i++){
//             console.log("Artist Name: " + response[i].album.artists[0].name)
//             console.log("Song Name: " + response[i].name)
//             console.log("Spotify Preview: " + response[i].external_urls.spotify);
//             console.log("Album Name: " + response[i].album.name)
//             console.log("---------------------")
//           };
//         })
//         .catch(function(err) {
//           console.log(err);
//         });
//   });
// };


// var request = require('request');
// var userMovieInput = "";
// function getIMDB(movie) {
//     inquirer.prompt([
//       {
//         name: "movie",
//         message: "What movie are you interested in?"
//       }
//     ])
//     .then(function(movie) {
//       userMovieInput = movie.movie;
//       request('http://www.omdbapi.com/?t='+userMovieInput+'&apikey=40e9cece', function(error, response, body) {
//           if (!error && response.statusCode === 200) {
//             console.log("Title: " + JSON.parse(body).Title);
//             console.log("Release Year: " + JSON.parse(body).Year);
//             console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//             console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//             console.log("Country: " + JSON.parse(body).Country);
//             console.log("Language: " + JSON.parse(body).Language);
//             console.log("Plot: " + JSON.parse(body).Plot);
//             console.log("Actors: " + JSON.parse(body).Actors);
//           }
//       });
//     });
// }

// // Create a "Prompt" with a series of questions.
// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "What would you like to do?",
//       choices: ["my-tweet", "spotify-this-song", "movie-this", "do-what-it-says"],
//       name: "options"
//     },
  
//   ])

// var firstTerm = process.argv[2];
// var secondTerm = process.argv[3];


// .then(function(inquirerResponse) {
//   if (inquirerResponse.options === "getTweets"){
//     getTweets();
//   }
//   else if (inquirerResponse.options === "spotify-this-song") {
//     getSpotify();
//   }
//   else if (inquirerResponse.options === "movie-this") {
//     getIMDB();
//   }
//   else if (inquirerResponse.options === "do-what-it-says") {
//  doWhatItSays();