//make the navbar background change color
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".navbar").css("background","rgba(255,0,0,1)");
    }
    else{
    	$(".navbar").css("background","rgba(1,1,1,1)");
    }
  });
});