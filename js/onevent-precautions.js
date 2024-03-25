$(document).ready(function(){

  //$(this).scrollTop(0);
 
  $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
  
  $('#icon').click(function(){
    $('ul').toggleClass("show");
    $(this).toggleClass("change");
    $('.page-wrapper').toggleClass("wrap");
  });


// ------------------- Form Page ----------------------------------
  $('#form-btn').click(function(){
    $('#form').addClass("showtab");
    $('#see-more-info').removeClass("showtab");
  });
  $('#closebtn1').click(function(){
    $('#form').removeClass("showtab");
    $('#form-btn').removeClass("active");
  });
// -------------------------- See more -----------------------------------
  $('#see-more-info-btn').click(function(){
    $('#form').removeClass("showtab");
    $('#see-more-info').addClass("showtab");
  });
  $('#closebtn2').click(function(){
    $('#see-more-info').removeClass("showtab");
    $('#see-more-info-btn').removeClass("active");
  });

  





});