// window scroll
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    } else{
        $('body').removeClass('fixed-header')
    }
})


// Document Ready
$(document).ready(function() {

    //Typing animation
    new Typed('#type-it', {
        strings: [ 'Software Engineer','Developer', 'Designer' ],
        typeSpeed: 50,
        typeSpeed: 100,
        loop: true
     });

     //Scroll it
     $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70           // offste (in px) for fixed top navigation
      });
});