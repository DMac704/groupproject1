$(document).ready(function () {

    console.log("READY!");

    // spotify api
    // access token (for ajax call)

    // var client_id = '090007e3600d4e579a27e68795279b6d'; // Your client id
    // var client_secret = '7d841303f464421cb70cb9524f045734'; // Your secret

    // window.onSpotifyWebPlaybackSDKReady = () => {
    //     var token = "BQAijHyFMOA1uensNTaFjPvtRD9hRBLL6gsHGxuCyYcQYB6zxJcuDqw48g4QUoBCfOAO6frdRJK2Y3k14uCvFQsafXffZzjkD9s1YM9Rna7pil50x5_Y-kg0MNCAgVZgn5nrER26JSVWWRMh61ni2TZ5PpuotLLFMiHX29zsn1R6aa2XfY9DGA";
    //     const player = new Spotify.Player({
    //         name: 'Web Playback SDK Quick Start Player',
    //         getOAuthToken: cb => {
    //             cb(token);

    //         }
    //     });
    // }
 
        // Get the hash of the url
        // const hash = window.location.hash
        // .substring(1)
        // .split('&')
        // .reduce(function (initial, item) {
        // if (item) {
        //     var parts = item.split('=');
        //     initial[parts[0]] = decodeURIComponent(parts[1]);
        // }
        // return initial;
        // }, {});
        // window.location.hash = '';
    
        // Set token
        let _token = 'BQCXYo3z2rSGXbcuCFTrFd-xrHK2Nc069COVzjJ4Gat6RkW85nVJYy1JFV2Im-jmz2Ksoxon4e7HoJh3juSVrbFQzN_1O66Jjxs4muUfCKwwz96BAjcFfSSaVZX9mDIqXk4nxeIJGVoQNUCtT2axGaqh9yd6uuaqmcwc2cQPdBkmf_tomCzPUw';

        var device_id = "";


    
        const authEndpoint = 'https://accounts.spotify.com/authorize';
    
        // Replace with your app's client ID, redirect URI and desired scopes
        const clientId = '04e15c5176114e1fb2ebc700280292ee';
        const redirectUri = 'http://localhost:4040';
        const scopes = [
            // 'streaming',
            // 'user-read-birthdate',
            // 'user-read-private',
            // 'user-modify-playback-state'
            'user-read-playback-state'
        ];
    
        // If there is no token, redirect to Spotify authorization
        if (!_token) {
            window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
        }
    
        // Set up the Web Playback SDK
    
        window.onSpotifyPlayerAPIReady = () => {
            const player = new Spotify.Player({
                name: 'Web Playback SDK Template',
                getOAuthToken: cb => { cb(_token); }
            });
    
            // Error handling
            player.on('initialization_error', e => console.error(e));
            player.on('authentication_error', e => console.error(e));
            player.on('account_error', e => console.error(e));
            player.on('playback_error', e => console.error(e));
    
            // Playback status updates
            player.on('player_state_changed', state => {
                console.log(state)
                // $('#current-track').attr('src', state.track_window.current_track.album.images[0].url);
                // $('#current-track-name').text(state.track_window.current_track.name);
            });
    
            // Ready
            player.on('ready', data => {
                console.log('Ready with Device ID', data.device_id);
                
                // Play a track using our new device ID
                device_id = data.device_id;

                // play(data.device_id);

            });
    
            // Connect to the player!
            player.connect();
        }
    
        // Play a specified track on the Web Playback SDK's device ID
        function play(track) {
        $.ajax({
        url: "https://api.spotify.com/v1/me/player/play?device_id=" + device_id,
        type: "PUT",
        data: '{"uris": ["spotify:track:2YpeDb67231RjR0MgVLzsG]}',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
        success: function(data) { 
            console.log(data)

        }
        });
        }
  
    $("#spotify").on('click', function (event) {
        event.preventDefault();
        console.log("button is clicked");
        
        $(".jumbotron").show();
        var searchValue = $("#searchBox").val();

        var token = "BQAijHyFMOA1uensNTaFjPvtRD9hRBLL6gsHGxuCyYcQYB6zxJcuDqw48g4QUoBCfOAO6frdRJK2Y3k14uCvFQsafXffZzjkD9s1YM9Rna7pil50x5_Y-kg0MNCAgVZgn5nrER26JSVWWRMh61ni2TZ5PpuotLLFMiHX29zsn1R6aa2XfY9DGA";

        $.ajax({
            type: "GET",
            url: "https://api.spotify.com/v1/search?q=" + searchValue + "&type=track",
            headers: {
                'Authorization': 'Bearer ' + _token
            },
            // data: {
            //     'context_uri': 'spotify:track:2iCcqggir1VUNIHfKDYKX9',
            //     'position_ms': 5000
            // }
            success: (data)=>{
                 console.log(data);
                play(data.tracks.items[0].id);
                
            }
        })
    });
 

    // bands in town api for events //

    var bands = $("#bandsInTown").html();

    var appID = "appId=369ee177bec3664bb630131b48ca0627"
    var queryUrl2 = "https://bandsintown.com/" + appID;

    var artistName = $("#searchbox").text();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/ " + queryUrl2,
        method: "GET /artists/" + artistName + "/events",
    }).then(function () {


    });

});

