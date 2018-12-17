window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  $(document).ready(function(){
  
    // https://stackoverflow.com/questions/38360676/get-the-element-which-is-the-most-visible-on-the-screen
    function getMostVisible( $elements ) {
        var $element = $(),
            viewportHeight = $( window ).height(),
            max = 0;
        $elements.each( function() {
            var visiblePx = getVisibleHeightPx( $( this ), viewportHeight );
            if ( visiblePx > max ) {
                max = visiblePx;
                $element = $( this );
            }
        } );
        return $element;
    }
  
    // https://stackoverflow.com/questions/38360676/get-the-element-which-is-the-most-visible-on-the-screen
    function getVisibleHeightPx( $element, viewportHeight ) {
        var rect = $element.get( 0 ).getBoundingClientRect(),
            height = rect.bottom - rect.top,
            visible = {
                top: rect.top >= 0 && rect.top < viewportHeight,
                bottom: rect.bottom > 0 && rect.bottom < viewportHeight
            },
            visiblePx = 0;
        if ( visible.top && visible.bottom ) {
            // Whole element is visible
            visiblePx = height;
        } else if ( visible.top ) {
            visiblePx = viewportHeight - rect.top;
        } else if ( visible.bottom ) {
            visiblePx = rect.bottom;
        } else if ( height > viewportHeight && rect.top < 0 ) {
            var absTop = Math.abs( rect.top );
            if ( absTop < height ) {
                // Part of the element is visible
                visiblePx = height - absTop;
            }
        }
        return visiblePx;
    }
  
    var currentApplePos = '0%';
  
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      var photoBottom = scrollTop - scrollTop/3
      $("#landing-background-image-container").css('bottom', photoBottom+'px');
      // $("#prologue-section").css('bottom', photoBottom+'px');
  
      var applePos = $(getMostVisible($('.story-section'))).data('applePos');
      if (applePos != currentApplePos) {
        currentApplePos = applePos;
        var linePos = $(getMostVisible($('.story-section'))).data('linePos');
        $('#step-line-tracker').stop(true, true).animate({'bottom': linePos}, 300);
        $('#apple-step-tracker').stop(true, true).animate({'top': applePos}, 300, function() {
          console.log($('#apple-step-tracker').offset().top)
          var appleTop = $('#apple-step-tracker').offset().top;
          $('.step-marker').each(function() {
            console.log($(this).offset().top)
            if ($(this).offset().top < appleTop) {
              $(this).css('border', '5px solid rgb(97, 240, 119)');
            }
            else {
              $(this).css('border', '5px solid white');
            }
          })
        });
      }
  
    });
  
  });
  