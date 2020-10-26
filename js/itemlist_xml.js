$(function () {
    //start  

    var itemList = $('#itemlist');
    var itemListSub = $('#itemlist option');
  

    function dataFun() {
        $.ajax({
            url: 'data.xml',
            type: 'GET',
            data: {
                a: 10
            },
            success: function (data) {
                
                var product = '',
                    name, num, price,priceAdd = 0;;                
                
                function funList(code) {
                    product = '';                    

                    $(data).find('item').each(function () {
                        
                        
                        name = $(this).find('name').text();
                        price = $(this).find('price').text();  
                        
                        var num = $('#numberUpDown').text();
                        var listVal = itemList.val();
                        
                        price2 = Number(price);
                        num2 = Number(num);
                        
                        if(listVal == name){
                            
                            var addPrice = price2 * num2;
                            
                             priceAdd += addPrice;
                            
                            
                            addPrice = numberFormat(addPrice);
                            
                             product = "<table class='optionclick'><thead><tr>";
                            product += "<td>" + name + "</td>";
                            product += "<td id='num'>" + num + "</td>";
                            product += "<td>" + addPrice + "</td>";
                            product += "<td>수정</td>";
                            product += "<td id='removeitem'>삭제</td>";
                            product += "</tr></thead></table>";                 
                        }
                    });
                    
                    $('#removeitem').click(function(){
                        var tr = $(this).parent();
                        
                        tr.stop().fadeOut(200);
                    });
                    
                    function numberFormat(inputNumber) {
                       return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                    
                                        
                    $('.m_m_rs').prepend(product);
                    $('.sub_6 strong').html("합산가격 <br> ￦ "+ priceAdd);

                    
                }
                 itemList.on('change', funList);                            
                //success end
            }
        });
        
        
    }

     dataFun();

    //end    
})
