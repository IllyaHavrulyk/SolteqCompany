$(function () {

	//Scroll Down animation
	$('.block-link').click(function (e) {
		e.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 1500);

	});



	$(document).ready(function () {
		$(".menu-icon").on("click", function () {
			$("nav ul").toggleClass("showing");
		});
	});

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('nav').addClass('black');
		} else {
			$('nav').removeClass('black');
		}
	})

	// Scrolling Effect


	// Scrolling Effect


	//E-mail Ajax Send



	$(".form-order").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Ваше замовлення надіслано, в найближчий час наш менеджер вийде на контакт!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".call-btn").click(function (e) {
		window.open(this.href);
    	return false;
	});

});