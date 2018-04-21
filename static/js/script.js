

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

//  Quotes script

  var $quotes = $('.quotes');
  var $quote_text = '.text';
  var $quote_author = '.author';
  var $transition_time = 1200; // 1 second
  var $time_between_slides = 100000; // 4 seconds

  function quotes_texts(){
    return $quotes.find($quote_text);
  }
  /* Adjust the size and position of quotes texts */
  var $width = $quotes.width();
  var $padding = $width * 8 / 100;
  var $text_width = $width - ($padding * 2);
  quotes_texts().width($text_width);
  quotes_texts().css('left',$padding+'px');
  var $index = $quotes.find($quote_text + '.active').index();
  // retreive the highest text
  var $max_height = 0;
  var $texts = $('.quotes .text');
  $texts.each(function($index){
    var $height = $texts.eq($index).find('span').first().height();
    if ($max_height < $height)
      $max_height = $height;
  });
  //var $text_height = quotes_texts().eq($index).height();
  $('.quote-box').height($max_height+40);
   $texts.each(function($index){
        console.log('max_height', $max_height + 40);
        console.log('height', $texts.eq($index).find('span').first().height());
        var $top = ($max_height + 40 - $texts.eq($index).find('span').first().height()) / 2;
        console.log($top)
        $texts.eq($index).css('top',$top+'px');
    });
  // console.log($max_height);

//  quotes_texts().fadeOut();
  // set active classes
  quotes_texts().first().addClass('active');

  //quotes_texts().first().animate({left: "+=1000", opacity:0}, $transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $quotes.find($quote_text + '.active').index();

       quotes_texts().eq($i).animate({left:"+=1000", opacity:0}, $transition_time, function()
       {
         quotes_texts().eq($i).removeClass('active');
         quotes_texts().eq($i).css('left','-=1000px');
       }); // push away
      if (quotes_texts().length == $i + 1) $i = -1; // loop to start
      quotes_texts().eq($i + 1).css('left','-=1000px');
      quotes_texts().eq($i + 1).animate({left:"+=1000", opacity:1}, $transition_time); // push in
      quotes_texts().eq($i + 1).addClass('active');
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