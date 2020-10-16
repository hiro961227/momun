$(function(){
    //start
    
    $(function() {
            $('.m_s_3 .m_s_3_1 thead').on('click',function(){
                var as = $(this).next();
                
                $('.m_s_3 .m_s_3_1 tbody').slideUp();
                as.slideDown();
                
                $('.m_s_3 .m_s_3_1 thead').removeClass('active');
                $(this).addClass('active');
            });
        });
    
    //end
});