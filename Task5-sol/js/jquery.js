
$(function(){

    $('.navbar-nav li a').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top+1
            

        },1000);


    });
    $('.navbar-nav li a').on('click',function(e){

        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll',function(e){
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var block=$(this).attr('id');
                $('.navbar-nav a').removeClass('active');
                $('.navbar-nav li a[data-scroll="'+ block +'"]').addClass('active');
            }
        })
    })


});