
$(document).ready(function(){
	$("#slajder-naslovna").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:true,
		autoplayHoverPause:true
	});

	$("#slajder-dj,#slajder-tmw").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		autoplayHoverPause:true,
		animateIn:"fadeInRight"
	});

	$("#slajder-dj2,#slajder-tmw2").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		autoplayHoverPause:true,
		animateIn:"fadeInLeft"
	});

	$("#slajder-proslegodine1").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true
	});

	$("#slajder-proslegodine2").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true
		
	});

	$("#slajder-proslegodine3").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true
		
	});

	$("#slajder-proslegodine4").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true
	});

function getFile() {
document.getElementById("upfile").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}

	
});