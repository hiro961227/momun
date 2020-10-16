$(function(){ 
//start    
    $('header').load('inc_head_foot.html header .main_header',header);
    $('footer').load('inc_head_foot.html footer .main_footer');
   
    function header(){
        function media(){
            var headerLeft = $('header .meida_header .h_lm');
            var headerRight = $('header .meida_header .h_rm');
            var leftBtn = $('header .meida_header .m_h_l .op_l_1');
            var rightBtn = $('header .meida_header .m_h_r .op_r_1');
            var menu = $('.h_m_1,.h_m_2,.h_m_3,.h_m_4,.h_m_5 ');


            $(leftBtn).click(function(){
                headerLeft.toggleClass('active');
            });
            $(rightBtn).click(function(){
                headerRight.toggleClass('active');
            });

            $('.menu_main').click(function(){
                $('.h_m').toggleClass('active');
            })

            $('.h_lm').each(function () {
                $(menu).click(function () {
                    $(this).addClass("active"); 
                    $(this).siblings().removeClass("active");  
                    //siblings:형제요소들
                });
            });
        }
        
        function pc(){
            var mainMenu = $('#mainmenu1, .h_m_m');
            var dropMenu = $('header .pc_header .h_l .h_m_m');
            var menu = $('header .pc_header .h_l .h_m_m div');
            var menuSub = $('header .pc_header .h_l .h_m_m div ul');
            
            console.log(menu);
            console.log(menuSub);


           mainMenu.hover(function(){
                dropMenu.stop().slideDown(300);
            },function(){ 
                dropMenu.stop().slideUp(300);
            }
           );
            
            //해당 idx에 맞는 자식요소만 불러오는거...:)..
            menu.mouseover(function(idx){
                idx = $(this).index();
                menu.children(idx).fadeIn(300);
            });

/*            function menuDrop(idx){
                var idx = $(this).index();

                menu.eq(idx).hover(function(){
                    console.log('idx');
                    menuSub.eq(idx).fadeIn(300);
                });
            }*/
         //pc end
        }
        
        media();
        pc();
    }
//end  
})
