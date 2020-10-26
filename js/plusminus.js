$(function(){
    $('#minusBtn').click(function(e){
        e.preventDefault();
        
        var stat = $('#numberUpDown').text();
        var num = parseInt(stat,10);
        
        num--;
        if(num<=0){
            alert('최소 수량은 1개부터입니다.');
            num =1;
        }        
            $('#numberUpDown').text(num);
        });
    
    $('#plusBtn').click(function(e){
        e.preventDefault();
        
        var stat = $('#numberUpDown').text();
        var num = parseInt(stat,10);
        
        num++;

        if(num>20){
            alert('최대 수량입니다.');
            num=20;
        }
            $('#numberUpDown').text(num);
    });
    
    
    
    //장바구니버튼
    function onBtn(){
        $('#buyBtn').click(function(e){
            e.preventDefault();
            $('.popup').addClass('on');
        })
        $('#wait').click(function(){
            $('.popup').removeClass('on');
        })
        $('#gogo').click(function(){
            location.href = "/myp.html";
        })  
    }
    onBtn();
    //관심상품버튼
    function onBtn2(){
        $('#likeBtn').click(function(e){
            e.preventDefault();
            $('.popup2').addClass('on');
        })
        $('#wait2').click(function(){
            $('.popup2').removeClass('on');
        })
        $('#gogo2').click(function(){
            location.href = "/login.html";
        })  
    }
    onBtn2();
    
});