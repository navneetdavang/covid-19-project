$(document).ready(function(){
  
  $('#sent-msg').on('click',function(){

    var emailReg = "/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/";

    var name_input = $('#name');
    var name = $('#name').val();

    var email_input = $('#email');
    var email = $('#email').val();

    var msg_input = $('#message');
    var msg = $('#message').val();

    if(name){
        name_input.removeClass("invalid");
    }else{
        name_input.addClass("invalid");
    }

    if(email && !emailReg.test(email)){
        email_input.removeClass("invalid");
    }else{
        email_input.addClass("invalid");
    }

    if(msg){
        msg_input.removeClass("invalid");
    }else{
        msg_input.addClass("invalid");
    }

  });
  
  $('#reset-form').click(function(){
    var name_input = $('#name');
    var email_input = $('#email');
    var msg_input = $('#message');
    name_input.removeClass("invalid");
    email_input.removeClass("invalid");
    msg_input.removeClass("invalid");
  });
});