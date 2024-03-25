
$(document).ready(function(){

    // $(this).scrollTop(0);
    
    $('.sidebar ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var id = $(this).attr('id');

        if(id == "id1"){
            $('#not-use-btn').delay("large").addClass("rotation");
            $("#when-not-to-use-sanitizer").delay("slow").slideDown();
        }else if(id == "id2"){
            $('#effectiveness-btn').delay("large").addClass("rotation");
            $("#which-is-effective").delay("slow").slideDown();
        }else if(id== "id3"){
            $('#avoid-touch-btn').delay("large").addClass("rotation");
            $("#avoid-touch-area").delay("slow").slideDown();
        }
    });

    $('.content-menu li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $('#btn1').click(function(){
        $("#info_wash").hide();
        $("#sanitizer-wash").hide();

        $("#soap-wash").show();
        $("#closebtn").show();
    });

    $('#btn2').click(function(){
        $("#info_wash").hide();        
        $("#soap-wash").hide();

        $("#sanitizer-wash").show();
        $("#closebtn").show();
    });

    $('#closebtn').click(function(){
        $("#sanitizer-wash").hide();
        $("#closebtn").hide();
        $("#soap-wash").hide();

        $("#info_wash").show();
    });

    $('#not-use-btn').click(function(){
        $(this).toggleClass("rotation");
        $("#when-not-to-use-sanitizer").slideToggle();
        $('#id1').toggleClass("active");
    });

    $('#effectiveness-btn').click(function(){
        $(this).toggleClass("rotation");
        $("#which-is-effective").slideToggle();
        $('#id2').toggleClass("active");
    });

    $('#avoid-touch-btn').click(function(){
        $(this).toggleClass("rotation");
        $("#avoid-touch-area").slideToggle();
        $('#id3').toggleClass("active");
    });

    
    // $('#btn1').click(function(){
    //     $("#cont").load("soap_water.html");
    // });
    // $('#btn2').click(function(){
    //     // $("#cont").load("sanitizer.html");
    //     $("#cont").load(function(){
    //         alert("hello");
    //     });
    // });
});

