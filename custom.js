$(document).ready(function() {
    $(".join-us-video-open").on("click", function(e) {
        $(".popup-overlay, .popup-content").addClass("active");
        e.preventDefault();
        if ($(window).width() > 980) {
            $('#video_container').html('<iframe src="https://player.vimeo.com/video/601389594?title=1&amp;byline=1&amp;portrait=1&amp;autoplay=true" width="800" height="450" frameborder="0"></iframe>');
        } else if ($(window).width() < 980) {
            $('#video_container').html('<iframe src="https://player.vimeo.com/video/601389594?title=1&amp;byline=1&amp;portrait=1&amp;autoplay=true" width="350" height="450" frameborder="0"></iframe>');
        }
      });
      
      //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
      $(".join-us-video-close, .popup-overlay").on("click", function() {
        $(".popup-overlay, .popup-content").removeClass("active");
      }); 
});
