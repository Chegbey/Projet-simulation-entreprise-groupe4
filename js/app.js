/* BOUTTON RECRUTEUR

$('#start-recruteur').click(function() {
    $(this).toggleClass("invisible");
    $(".eventClick-recruteur").toggleClass("visible");
});

 BOUTTON DEMANDEUR

$('#start-demandeur').click(function() {
    $(this).toggleClass("invisible");
    $(".eventClick-demandeur").toggleClass("visible");
});

*/

/* SCROLL BOUTON SUITE */

/* ANIMATION NAVBAR SCROLLING */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
