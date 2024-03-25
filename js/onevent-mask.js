$(document).ready(function(){

    //$(this).scrollTop(0);

    $('.sidebar ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var id = $(this).attr('id');

        if(id == "id1"){
            $('#which-mask-btn').delay("large").addClass("rotation");
            $("#which-mask-to-use-content").delay("slow").slideDown();
        }
    });

    $('.content-menu li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // ------------------------------------------------------------------------------
    // N95-masks-area
    // Surgical-masks-area
    // Homemade-masks-area
    $('#n-resp-btn').click(function(){
        $("#info_mask").hide();
        $("#Surgical-masks-area").hide();
        $("#Homemade-masks-area").hide();

        $("#N95-masks-area").show();
        $("#closebtn2").show();
    });

    $('#surgical-btn').click(function(){
        $("#info_mask").hide();        
        $("#N95-masks-area").hide();
        $("#Homemade-masks-area").hide();

        $("#Surgical-masks-area").show();
        $("#closebtn2").show();
    });

    $('#homemade-mask-btn').click(function(){
        $("#info_mask").hide();        
        $("#N95-masks-area").hide();
        $("#Surgical-masks-area").hide();

        $("#Homemade-masks-area").show();
        $("#closebtn2").show();
    });

    $('#closebtn2').click(function(){
        $("#Homemade-masks-area").hide();
        $("#Surgical-masks-area").hide();
        $("#N95-masks-area").hide();
        $("#closebtn2").hide();

        $("#info_mask").show();
    });

    $('#which-mask-btn').click(function(){
        $(this).toggleClass("rotation");
        $("#which-mask-to-use-content").slideToggle();
        $('#id1').addClass("active");
    });

});