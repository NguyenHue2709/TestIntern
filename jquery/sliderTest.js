jQuery(document).ready(function($){
  $('.slider').each(function() {    // Tương tự như for cho mỗi slide   
  var $this   = $(this);                   
  var $group  = $this.find('.slide-group'); 
  var $slides = $this.find('.slide');  //item
  //var totalImg = $this.find('.slide').length; 
  var buttonArray  = [];  

  //var buttonArrayTest = [];              
  var currentIndex = 0;                 
  var timeout;   
                        
  function move(newIndex) {         
    var animateLeft, slideLeft;    

    advance();                       
    
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }
   
    //var newButton = newIndex/2;
     buttonArray[currentIndex].removeClass('active'); 
      buttonArray[newIndex].addClass('active');        

    if (newIndex > currentIndex) {   
      slideLeft = '100%';          
      animateLeft = '-100%';         
    } else {                         
      slideLeft = '-100%';          
      animateLeft = '100%';          
    }
    
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    //$sliderTests.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {   
      $slides.eq(currentIndex).css( {display: 'none'} );    
      $slides.eq(newIndex).css( {left: 0} ); 
      //$sliderTests.eq(currentIndex).css( {display: 'none'} );    
      //$sliderTests.eq(newIndex).css( {left: 0} ); 
      $group.css( {left: 0} );              
      currentIndex = newIndex;              
    });
  }
 
  //
  function advance() {              
    clearTimeout(timeout);               
    timeout = setTimeout(function() {   
      if (currentIndex < ($slides.length - 1)) { 
        move(currentIndex + 1);            
      } else {                            
        move(0);                           
      }
      //if (currentIndex < ($sliderTests.length - 1)) { 
        //move(currentIndex + 1);            
      //} else {                            
        //move(0);                           
      //}
    }, 4000);                         
  }

  $.each($slides, function(index) {
   
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    
    if (index === currentIndex) {    
      $button.addClass('active');    
    }

    $button.on('click', function() {
      move(index);                   
    }).appendTo('.slide-buttons');  
    buttonArray.push($button);     
  });

  
  advance(); 



  //Test
  $('.sliderTest').each(function() {
    var $this   = $(this);                   
    var $group  = $this.find('.slide-group'); 
    var $slides = $this.find('.slide');  //item
    //var totalImg = $this.find('.slide').length; 
    var buttonTestArray  = [];  
  
    //var buttonArrayTest = [];              
    var currentTestIndex = 0;                 
    var timeout;   
                          
    function moveTest(newTestIndex) {         
      var animateLeft, slideLeft;    
  
      advanceTest();                       
      
      if ($group.is(':animated') || currentTestIndex === newTestIndex) {  
        return;
      }
     
      //var newButton = newIndex/2;
       buttonTestArray[currentTestIndex].removeClass('active'); 
        buttonTestArray[newTestIndex].addClass('active');        
  
      if (newTestIndex > currentTestIndex) {   
        slideLeft = '100%';          
        animateLeft = '-100%';         
      } else {                         
        slideLeft = '-100%';          
        animateLeft = '100%';          
      }
      
      $slides.eq(newTestIndex).css( {left: slideLeft, display: 'block'} );
      //$sliderTests.eq(newIndex).css( {left: slideLeft, display: 'block'} );
  
      $group.animate( {left: animateLeft}, function() {   
        $slides.eq(currentTestIndex).css( {display: 'none'} );    
        $slides.eq(newTestIndex).css( {left: 0} ); 
        //$sliderTests.eq(currentIndex).css( {display: 'none'} );    
        //$sliderTests.eq(newIndex).css( {left: 0} ); 
        $group.css( {left: 0} );              
        currentTestIndex = newTestIndex;              
      });
    }
   
    //
    function advanceTest() {              
      clearTimeout(timeout);               
      timeout = setTimeout(function() {   
        if (currentTestIndex < ($slides.length - 1)) { 
          moveTest(currentTestIndex + 1);            
        } else {                            
          moveTest(0);                           
        }
        //if (currentIndex < ($sliderTests.length - 1)) { 
          //move(currentIndex + 1);            
        //} else {                            
          //move(0);                           
        //}
      }, 4000);                         
    }
  
    $.each($slides, function(index) {
     
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      
      if (index === currentTestIndex) {    
        $button.addClass('active');    
      }
  
      $button.on('click', function() {
        moveTest(index);                   
      }).appendTo('.slide-buttonst');  
      buttonTestArray.push($button);     
    });
  
    advanceTest();
  });
                       
  
});
        // Button prev and next
   /* var endImg = $(".slide-4").attr("idx");

    $(".next").click(function () {
      if (++currentIndex > endImg) {
          currentIndex = 0;
      }

      $(".slide").hide();
      $(".slide").eq(currentIndex).show();
      $(".btn").removeClass("active");
      $(".btn").eq(currentIndex).addClass("active");
  });
  
  $(".prev").click(function () {
      if (--currentIndex < 0) {
          currentIndex = endImg;
      }

      $(".slide").hide();
      $(".slide").eq(currentIndex).show();
      $(".btn").removeClass("active");
      $(".btn").eq(currentIndex).addClass("active");
  });*/
 
});