
$(function(){
    var mainMenu = $('#mainmenu1, .h_m_m');
    var dropMenu = $('header .pc_header .h_l .h_m_m');
    var menu = $('header .pc_header .h_l .h_m_m div');
    var menuSeb = $('header .pc_header .h_l .h_m_m div ul');
  
    
   mainMenu.hover(function(){
        console.log('들어옴');
        dropMenu.stop().fadeIn(300);
    },function(){        
        console.log('나감');
        dropMenu.stop().fadeOut(300);
    }
);
    
    
    function menuDrop(idx){
        var idx = $(this).index();
    
        menu[idx].hover(function(){
            menuSeb.fadeIn(300);
        });
    }
    
});