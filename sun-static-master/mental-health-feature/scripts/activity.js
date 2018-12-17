$(document).ready(function() {
  $(window).scroll(function(){
    var focusedCategory = null;
    var minDistance = 100000;
    $('.category-container').each(function(i, obj) {
        var dist = Math.abs($(this).offset().top + $(this).outerHeight()/2 - $(window).scrollTop() - $(window).outerHeight()/2);
        if (dist < minDistance) {
          minDistance = dist;
          focusedCategory = $(this);
        }
        $(this).children('div.gradient-cover').css("background-color","rgba(32, 31, 34, 0.85)");
    });
    focusedCategory.children('div.gradient-cover').css("background-color","rgba(32, 31, 34, 0)");
  });

});
