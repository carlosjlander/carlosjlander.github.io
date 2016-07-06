$(document).ready(function(){
	/* 
	** Script to Activate the Carousel
	*/
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });

	var IniPoint = new Waypoint({
		element: document.getElementById('carousel-example-generic'),
		handler:function(){
			$("#plus1,#plus2,#plus3,#plus4").css('visibility','visible');
			$("#plus1").addClass('animated slideInLeft');
			$('#plus1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', nextAnimate());
		}
	});
});

function nextAnimate(){
	$("#plus2").addClass('animated fadeInUpBig');
	$("#plus3").addClass('animated fadeInUpBig');
	$("#plus4").addClass('animated slideInRight');
}