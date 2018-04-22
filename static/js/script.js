

$(document).ready(function()
{

  // Slider code
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'div'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }
  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );
// =======================================================

// quotes animation
  var $Quotes = $('.ArticleCopy'); // class or id of carousel slider
  var $quote_text = 'blockquote div'; 
  var $author = '.author'
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function quotes_texts(){
    return $Quotes.find($quote_text);
  }
  quotes_texts().fadeOut();

  var $authors = $Quotes.find($author);

  // set active classes
  quotes_texts().first().addClass('active');
  quotes_texts().first().fadeIn($transition_time);

  $authors.first().addClass('active');
  $authors.first().fadeIn($transition_time);

  $interval = setInterval(
    function(){
      var $i = $Quotes.find($quote_text + '.active').index();

      quotes_texts().eq($i).removeClass('active');
      $authors.eq($i).removeClass('active');

      quotes_texts().eq($i).fadeOut($transition_time, function(){
           if (quotes_texts().length == $i + 1) $i = -1; // loop to start

            quotes_texts().eq($i + 1).fadeIn($transition_time, function() {
            });
            quotes_texts().eq($i + 1).addClass('active');
              $authors.eq($i + 1).fadeIn($transition_time);
              $authors.eq($i + 1).addClass('active');
            
      });
          $authors.eq($i).fadeOut($transition_time);

     
    }
    , $transition_time +  $time_between_slides 
  );
} );


// Resize event

$( window ).resize(function(){
  // updates the size and position of the quotes texts
  var $quotes = $('.quotes');
  var $quote_text = '.text';
  var $texts = $quotes.find($quote_text);
  var $width = $quotes.width();
  var $padding = $width * 8 / 100;
  var $text_width = $width - ($padding * 2);
  console.log($text_width);
  $texts.width($text_width);
  $texts.css('left',$padding+'px');  
});



//  Scroll event

$(window).scroll(function() {

  // Nav bar script
  var vScroll = $(this).scrollTop();
  if(vScroll > 300){
    $('.masthead').addClass('navm-dark'); 
  }
  else{
    $('.masthead').removeClass('navm-dark');
  }
  
  if(vScroll > 50){
    $('.mastfoot').fadeOut(500);
  }
  else{
    $('.mastfoot').fadeIn(500);
  }

});
(function () {
    $('#awards img').hover(function(){
      console.log();
      //this.attr("src", this.attr("src"))
    }, function(){
      console.log("hell no");
    })      // I will invoke myself
})();