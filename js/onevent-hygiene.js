$(document).ready(function(){

    //$(this).scrollTop(0);
    
    $('.sidebar ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
});