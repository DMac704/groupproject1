
$(document).ready(function () {
    console.log("ready!");

    // spotify api
    // access token (for ajax call)


    // var queryUrl = "https://api.spotify.com"

    // var client_id = '090007e3600d4e579a27e68795279b6d'; // Your client id
    // var client_secret = '7d841303f464421cb70cb9524f045734'; // Your secret

    window.onSpotifyWebPlaybackSDKReady = () => {
        var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA";
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => {
                cb(token);

            }
        });
    }

    $("#spotify").on('click', function (event) {
        event.preventDefault();
        console.log("button is clicked");
        
        var token = "BQBUd5zrqDTTZvzsNxFO15dSpFmZwd41cOZgox08uBpvhEKmz8ecV9sF3PP_A8fd7mjGAaPqrpz_wMaM3ckQtqQEtHqAA2-fuaRBFSwgEdqqC97SYnhu6gEszO-vGFgO7ysH4h7nzsawFimOjaFoAxNinpVxR-tgFidJsvYIqjFqMM4XJeKITA";

        $.ajax({
            
            POST: "https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me/player",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: {
                'context_uri': 'spotify:track:2iCcqggir1VUNIHfKDYKX9',
                'position_ms': 5000
            }
        })
    });


    // bands in town for events //

    // var bands = $(".events").html();

    var appID = "appId=369ee177bec3664bb630131b48ca0627"
    var queryUrl2 = "https://bandsintown.com/" + appID;

    var artistName = $("#searchbox").text();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
        method: "GET /artists/" + artistName + "/events",
    }).then(function () {


    });

});