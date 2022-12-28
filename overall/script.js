$(document).ready(function(){
    console.log('hiii')
    $('a').hover(function(){
        $(this).addClass("underline");
      }, function(){
        $(this).removeClass("underline");
      });
})
