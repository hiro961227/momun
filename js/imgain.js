$(function () {
    //start

    //ul li hover > figure img 변경...
    var menu = $('main .main_ct ul li');
    var mImg = $('main .main_ct figure a img');



    $(mImg).not(':first').hide();
    var idx = 0,bln;
    var loop;

    function fade() {

        //img change
        if(bln){idx++;}
        update();
        $(mImg).stop().fadeOut(600);
        $(mImg).eq(idx).stop().fadeIn(600);
    }

    function update() {
        var len = $(mImg).length;
        if (idx >= len) idx = 0;
        $(menu).removeClass('on');
        $(menu).eq(idx).addClass('on');
    }

    function clearFun() {
        clearInterval(loop);
    }

    function interFun() {
        bln = true;
        loop = setInterval(fade, 1800);
    }

    $(mImg).on({
        mouseenter: clearFun,
        mouseleave: interFun
    });


    //li hover
    $(menu).on('mouseenter', imgHv);

    function imgHv() {
        bln=false; clearFun();
        idx = $(this).index();
        
        fade();

    }




    //end
});
