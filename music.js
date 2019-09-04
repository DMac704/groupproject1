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

  var youtube = $(".youtube").html(player);

  var queryURL = "https://www.youtube.com/iframe_api" + youtube + "&apikey=AIzaSyA1XMeuMaCSqDBkHqBWJaX8AcxGQs6jW7c";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
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
    
    $("#submit").click(function () {
      $(player).show();

    });

  });

});