
$(document).ready(function () {
  console.log("ready!");

  // spotify api
  // access token (for ajax call)


  // var queryUrl = "https://api.spotify.com"

  var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA"

  var client_id = '090007e3600d4e579a27e68795279b6d'; // Your client id
  var client_secret = '7d841303f464421cb70cb9524f045734'; // Your secret
  

  $(".btn").click(function () {
    event.preventDefault(); 
    console.log("button is clicked");

  
    $.ajax({
      POST: 'https://api.spotify.com/v1/me/player/play',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: {
        'context_uri' : 'spotify:track:2iCcqggir1VUNIHfKDYKX9',
        'position_ms' : 5000 
      }
    })
  }, false);
   

  
   
  // bands in town for events //

  // var bands = $(".events").html();

  var appID = "appId=369ee177bec3664bb630131b48ca0627"
  var queryUrl2 = "https://bandsintown.com/" + appID;


  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
    method: "GET /artists/{artistname}?" + appID,
  }).then(function () {



  });
   
    });
