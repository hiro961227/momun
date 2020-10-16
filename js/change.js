window.onload = function () {


    var mainImg = $('#bigPic');
    var subImg = $('.main_c .m_m_l article img');


    $(subImg).on('click', changeImg);

    function changeImg() {
        subImg.removeClass('active');
        $(this).addClass('active');
    }


    $(subImg).on({
        "click": function () {
            var imgSrc = $(this).attr('src');

            $(mainImg).attr('src', imgSrc);
            zoom2(imgSrc);
        }
    })
    $(subImg).eq(0).trigger('click');

    function zoom2(cg) {    
        var target = $('#bigPic');
        var zoom = target.data('zoom');
        target.attr("src",cg);
        //함수로 묶어서cg로 변경하는 태그만 추가해줌..
        $("main .main_c .m_m_l .m_m_img")
            .on('mousemove', magnify)
            .prepend("<div class='magnifier'></div>")
            .children('.magnifier').css({
                "background": "url('" + target.attr("src") + "') no-repeat",
                "background-size": target.width() * zoom + "px " + target.height() * zoom + "px"
            });

        var magnifier = $('.magnifier');

        function magnify(e) {

            // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
            var mouseX = e.pageX - $(this).offset().left;
            var mouseY = e.pageY - $(this).offset().top;

            // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
            if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
                magnifier.fadeIn(100);
            } else {
                magnifier.fadeOut(100);
            }

            //돋보기가 존재할 때
            if (magnifier.is(":visible")) {

                // 마우스 좌표 확대될 이미지 좌표를 일치시킨다.
                var rx = -(mouseX * zoom - magnifier.width() / 2);
                var ry = -(mouseY * zoom - magnifier.height() / 2);

                //돋보기를 마우스 위치에 따라 움직인다.
                //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
                var px = mouseX - magnifier.width() / 2;
                var py = mouseY - magnifier.height() / 2;

                //적용
                magnifier.css({
                    left: px,
                    top: py,
                    backgroundPosition: rx + "px " + ry + "px"
                });
            }
        }
    }



}
