var $document = $(document),
	$element = $('.navbar'),
	navbarDefault = 'navbar-default';
	navbarTransparent = 'navbar-transparent';

	fadeInDown ='fadeInDown';

$document.scroll(function() {
	if ($document.scrollTop() >= 100) {
		$element.addClass(navbarDefault);
		$element.removeClass(navbarTransparent);

		$element.addClass(fadeInDown);
	} else {
		$element.addClass(navbarTransparent);
		$element.removeClass(navbarDefault);

		$element.removeClass(fadeInDown);
	}
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50 // need to adjust
            }, 1000);
            return false;
        }
    });
});