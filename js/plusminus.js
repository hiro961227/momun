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
    
});