jQuery(document).ready(function($){

var imgArray = []
var eleScroll = 0;
var wh = $(window).height();

function update_offsets(){
  $('div').each(function(){
    var x = $(this).offset().top;
    imgArray.push(x);
  });
};

function lazy() {
  eleScroll = $(window).scrollTop();
  for(i = 0; i < imgArray.length; i++){
    if(imgArray[i] <= eleScroll + (wh - 200)){
      $('div').eq(i).addClass('loaded');
    };
  };
};

// Page Load
update_offsets();
lazy();

$(window).on('scroll',function(){
  lazy();
})});