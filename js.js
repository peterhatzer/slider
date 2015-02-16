$.fn.slider = function() {
	$("#next").click(function(){
	var currentSlide = $('.active');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0){
      nextSlide = $('.slides').first();
    }

    currentSlide.animate({ "left": "-700px" }, "slow" ).removeClass('active');
    nextSlide.addClass('active');

	});
   

//slider prev button


$("#prev").click(function(){

    var currentSlide = $('.active');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0){
      prevSlide = $('.slides').last();
    }

    currentSlide.fadeOut(600).removeClass('active');
    prevSlide.fadeIn(600).addClass('active');
	});
  
};
 
