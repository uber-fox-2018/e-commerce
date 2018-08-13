function changeBackground() {
	const pictures = [
		"alex-lamb-771521-unsplash",
		"andre-benz-659266-unsplash",
		"casey-horner-773607-unsplash",
		"cody-board-773107-unsplash",
		"jonatan-pie-486589-unsplash",
		"marc-kleen-772589-unsplash"
	];
	$(".slideshow li:nth-child(1)").fadeOut(500, function(){
		$(this).css("background-image",`url('../../assets/img/${theChosenOne(pictures)}.jpg')`).fadeIn(2000);
	})
}

changeBackground();