$(function(){
    //start
    
    var navEl = $('.m_s .selected .menu_s_1 li a');
    var secEl = $('.selected > div');


    //console.log(secEl.eq(0).offset().top);
    
    
    var secArr = [];
    
        
    secEl.each(function(idx){
        secArr.push(secEl.eq(idx).offset().top); 
    });
    console.log(secArr);
    
    navEl.each(function(idx){
        navEl.on('click',function(){
            $(window).scrollTop(0,secArr[idx]);
        });
    });
    
    //스크롤 해도 active가 안들어와요..    
    var winH = $(window).innerHeight()/2;
    $(window).scroll(function(){
       $.each(secArr,function(idx){
           if($(window).scrollTop() >= secArr[idx]){
               
               navEl.removeClass('active');               
               navEl.eq(idx).addClass('active');
           }
       }); 
    });
    
    

    //클릭하면 active넣어줌
    $(navEl).click(function(){
        navEl.removeClass('active');
        $(this).addClass('active');  
    });
    
    //스크롤해서 고정시켜줌
    $( document ).ready( function() {
        var navOffset = $( '.selected .menu_s_1' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > navOffset.top ) {
            $( '.selected .menu_s_1' ).addClass( 'navFixed' );
          }
          else {
            $( '.selected .menu_s_1' ).removeClass( 'navFixed' );
          }
        });
      } );   

    
    
 //end 
});

