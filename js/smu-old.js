/*$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.show() : $back_to_top.hide();
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.hide();
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

function scrollToAcademics()
{
 var x = $("div.container .section_gra .container").offset().top;
 var y = $(".section_gra").height()-$("div.container .section_gra .container h3").height()-10;
 $('html, body').animate({
        scrollTop:  x+y,
    }, 1000);
}

function scrollToTalks()
{
 var x = $("div.container .section_gra .container").offset().top;
 
 var z = $("div.container .section_gra .container h3").first().height() + $("div.container .section_gra .container p").first().height();

 var y = $(".section_gra").height()+z; 

 $('html, body').animate({
        scrollTop:  x+y,
    }, 1000);
}


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() 
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
    {
      var target = $(this.hash);
      //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) 
      {
        
    if(this.hash == "#Activity")
    {
      $('html, body').animate({
           scrollTop:  $('.container.section_2 .section_gra .section_title .inner').first().offset().top - ($('.container.section_2 .section_gra .section_title .inner div').height()+$('.container.section_2 .section_gra .section_title .inner div').height()/1),
       }, 1000);

    }else if(this.hash == "#Academic")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_3.section_bg .section_gra .section_title .inner').first().offset().top - ($('.container.section_3.section_bg .section_gra .section_title .inner div').height()+$('.container.section_3.section_bg .section_gra .section_title .inner div').height()/1),
       }, 1000);

    }else if(this.hash == "#Culture")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_4 .section_gra .section_title .inner').first().offset().top - ($('.container.section_4 .section_gra .section_title .inner div').height()+$('.container.section_4 .section_gra .section_title .inner div').height()/1),
       }, 1000);

    }else if(this.hash == "#Festival")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_5.section_bg .section_gra .section_title .inner').first().offset().top - ($('.container.section_5.section_bg .section_gra .section_title .inner div').height()+$('.container.section_5.section_bg .section_gra .section_title .inner div').height()/1),
       }, 1000);
     
    }else if(this.hash == "#There")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_6 .section_gra .section_title .inner').first().offset().top - ($('.container.section_6 .section_gra .section_title .inner div').height()+$('.container.section_6 .section_gra .section_title .inner div').height()/1),
       }, 1000);
    }else
    {
     console.log(this.hash);
    }
    
        return false;
      }
    }
  });
});