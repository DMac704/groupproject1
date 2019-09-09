
$(document).ready(function () {
  console.log("ready!");

  // spotify api
  // access token (for ajax call)


  // var queryUrl = "https://api.spotify.com"

  var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA"


  $(".btn").click(function () {
    event.preventDefault(); 

  
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
   
   
   
   
    // $.ajax({
    //   url: "https://cors-anywhere.herokuapp.com/ " + queryUrl + token,
    //   method: "GET",
    //   success: function () {

    //   }

    });


  // bands in town for events //

  // var bands = $(".events").html();

  var appID = "appId=369ee177bec3664bb630131b48ca0627"
  var queryUrl2 = "https://bandsintown.com/" + appID;


  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
    method: "GET /artists/{artistname}?" + appID,
  }).then(function () {



  });

























