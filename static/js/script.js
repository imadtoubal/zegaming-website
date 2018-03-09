$(window).scroll(function() {
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