# YouTube embedded video
```html
<div id="YouTubeVideoBlock"></div>
<script async src="https://www.youtube.com/iframe_api"></script>
<script>
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('YouTubeVideoBlock', {
        videoId: 'VIDEO_ID', // YouTube Video ID
        width: '100%', // Player width (in px)
        height: '100%', // Player height (in px)
        playerVars: {
            autoplay: 1, // Enable/Disable autoplaying
            controls: 0, // Enable/Disable showing control components
            showinfo: 0 // Enable/Disable showing information
        },
        events: {
            // Mute video on loading
            onReady: function(e) {
                e.target.mute();
            },

            // Cycle video
            onStateChange: function(e) {
                if (e.data === YT.PlayerState.ENDED) {
                    player.playVideo();
                }
            }
        }
    });
}
</script>
```
