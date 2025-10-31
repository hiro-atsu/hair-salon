$(function(){
    $('.hamburger').on('click',function(){
        hamburger()
    })

    $('#nav a').on('click',function(){
        hamburger()
    })

    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html': href);
        let position = target.offset().top;
        $("body,html").animate({scrollTop:position}, 600, "swing")
        return false;
    })

    $('.slide-left').on('inview',function(event,isInView,visiblePartX,visiblePartY){
        if(isInView){
            $(this).stop().addClass('slide-of-left')
        }
    })

    $('.slide-right').on('inview',function(event,isInView,visiblePartX,visiblePartY){
        if(isInView){
            $(this).stop().addClass('slide-of-right')
        }
    })

    $('.slide-up').on('inview',function(event, isInView,visiblePartX,visiblePartY){
        if(isInView){
            $(this).stop().addClass('slide-of-up');
        }
    })
})

function hamburger(){
    $('.hamburger').toggleClass('open');
    if($('.hamburger').hasClass('open')){
        $('#nav').addClass('open');
    }else{
        $('#nav').removeClass('open');
    }
}