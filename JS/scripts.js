// $('.burger-menu').on('click', function(e) {
//     e.preventDefault();
//     $('.navbar_right').toggleClass('navbar_right_opened');
//     $('body').toggleClass('no_scroll');
// })

let scrollPosition = 0;

$('.burger-menu').on('click', function(e) {
    e.preventDefault();

    const menu = $('.navbar_right');
    const body = $('body');

    if (!menu.hasClass('navbar_right_opened')) {
        scrollPosition = window.pageYOffset;

        body.css({
            position: 'fixed',
            top: -scrollPosition + 'px',
            width: '100%'
        });

        menu.addClass('navbar_right_opened');
    } else {
        body.css({
            position: '',
            top: '',
            width: ''
        });

        window.scrollTo(0, scrollPosition);
        menu.removeClass('navbar_right_opened');
    }
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});