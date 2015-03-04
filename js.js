$.fn.slider = function() {

//slider next button
	
    $("#next").click(function(){

	var currentSlide = $('.active');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0){
      nextSlide = $('.slides').first();
      nextDot = $('.bullPoints').first();
    }

    currentSlide.fadeOut(600).removeClass('active');
    nextSlide.fadeIn(600).addClass('active');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

	});
   

//slider prev button


$("#prev").click(function(){

    var currentSlide = $('.active');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0){
      prevSlide = $('.slides').last();
      prevDot = $('.bullPoints').last();
    }

    currentSlide.fadeOut(600).removeClass('active');
    prevSlide.fadeIn(600).addClass('active');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
	});

//slider bullet points

var sliderCount = $(".slides").length;
    
    $("#slider").after("<div id=\"slider-dots\" style=\"text-align:center;\"><ul></ul></div>");
     
    for(var i = 0; i < sliderCount; i++){
        $('#slider-dots ul').append("<li class=\"bullPoints " + i + "\">&bull;</li>");   
    }

    $(".bullPoints").first().addClass("active-dot");

};