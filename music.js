
$(document).ready(function () {
  console.log("ready!");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1XMeuMaCSqDBkHqBWJaX8AcxGQs6jW7c",
    authDomain: "groupproject-5db84.firebaseapp.com",
    databaseURL: "https://groupproject-5db84.firebaseio.com",
    projectId: "groupproject-5db84",
    storageBucket: "",
    messagingSenderId: "897998664226",
    appId: "1:897998664226:web:60ba90cac571315f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  $(".btn").on("click", function () {
    event.preventDefault();
    console.log("element was clicked!!");

    return true;
  });

  // spotify api
  // access token (for ajax call)


  var queryUrl = "https://api.spotify.com"
  var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA"


  $(".btn").click(function () {
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/ " + queryUrl + token,
      method: "GET",
      success: function () {

      }
    });
  });

  // bands in town for events //

  // var bands = $(".events").html();

  var appID = "appId=369ee177bec3664bb630131b48ca0627"
  var queryUrl2 = "https://bandsintown.com" + appID;


  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
    method: "GET /artists/{artistname}?" + appID,
  }).then(function () {



  });


});

























