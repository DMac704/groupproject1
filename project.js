
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

  var player;

  $(".btn").on("click", function () {
    event.preventDefault();
    console.log("element was clicked!!");

    return true;
  });

  // spotify api
  // access token (for ajax call)


  var queryUrl = "https://api.spotify.com"
  var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA"

<<<<<<< HEAD
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    // 2. This code loads the IFrame Player API code asynchronously.

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }


    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
=======
>>>>>>> cafa929e141c4fb70bf0f97952af5db13a2d75fd

  $(".btn").click(function () {
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/ " + queryUrl + token,
      method: "GET",
      success: function () {

      }
    });
  });

  // bands in town for events //

<<<<<<< HEAD
  
  var bands = $(".events").html();
 // bands.show();

  var events = "https://bandsintown.com" + bands + "appId=369ee177bec3664bb630131b48ca0627";
=======
  // var bands = $(".events").html();

  var appID = "appId=369ee177bec3664bb630131b48ca0627"
  var queryUrl2 = "https://bandsintown.com" + appID;

>>>>>>> cafa929e141c4fb70bf0f97952af5db13a2d75fd

  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
    method: "GET /artists/{artistname}?" + appID,
  }).then(function () {

<<<<<<< HEAD

=======
>>>>>>> cafa929e141c4fb70bf0f97952af5db13a2d75fd


  });


});

























