// document.addEventListener("DOMContentLoaded", function(event) {
//   var vid1 = document.getElementById("vid1");
//   vid1.pause();
//   $(window).scroll(function(){
//     var windowHeight = $(window).height();
//     var vidContainer = document.getElementsByClassName("parallax-video")[0];
//     var offset = $(vidContainer).offset();
//     var containerHeight = $(vidContainer).height();
//     var vidHeight = $(vid1).height();
//     var scrollTop = $(window).scrollTop();
//     // var infoBox = document.getElementById("tracker");
//     // infoBox.innerHTML = (offset.top) + ', ' + (scrollTop-containerHeight+40);
//     if ((offset.top)<=(scrollTop) && offset.top >= (scrollTop-containerHeight+windowHeight)) {
//       vid1.play();
//     }
//     if ((offset.top)<(scrollTop-containerHeight+40)
//         || (offset.top) > (scrollTop+windowHeight)) {
//       vid1.pause();
//       vid1.currentTime = 0;
//     }
//   });
// });
