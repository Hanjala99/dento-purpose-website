// down btn to top 
$(document).ready(function(){
	$('.down-btn, #home, #click1, #click2').click(function(){
		 $("html, body").animate({ scrollTop: 0 }, "slow");
  		 return false;
	});
	$(window).scroll(function(){
		var scrollSize = $(window).scrollTop();
		if(scrollSize <=600)
		{
			$('.down-btn').css("display","none");
		}
		else
		{
			$('.down-btn').css("display","block");
		}
	});
//navbar toggler 
	$('#navbar-toggler').click(function(){
		var x = $(".middle-nav-list");
		if ($(x).css('display') == "none") {
			x.css("display","block");
		}else{
			x.css("display","none");
		}
	});

});