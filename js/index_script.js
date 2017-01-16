//This script should either include or reference in the index page of Open House

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
$(document).ready(function(){ 
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
      if($(window).scrollTop() + $(window).height() < $(document).height() - $("#footer").height()) {
      $('#toTop').addClass('bot_0'); //resetting it
      $('#toTop').removeClass('bot_fh'); //resetting it
  }
      if($(window).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()) {
      $('#toTop').addClass('bot_fh'); // 60 px, height of #toTop
      $('#toTop').removeClass('bot_0'); // 60 px, height of #toTop
   }
    
    });


    $("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
    });
});



var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;





var offset = 0;
var mobileOffset = 0;
var talksMobileOffset = 0;
var schoolboothOffset=0;
var toursOffset=65;
var nightFest = 0;
var pakOffset = 40;

function updateOffset()
{
  mobileOffset=0;
  talksMobileOffset=0;
  schoolboothOffset=0;
  toursOffset=65;

  if ( $(window).width() > 939) 
  {
    offset = 30;
    console.log("Screen:Large:Offset:"+offset);
    schoolboothOffset=20;
    talksMobileOffset=-17;

  }
  else if( $(window).width() > 439) 
  {
    offset = 80;
     console.log("Screen:Medium:Offset"+offset);
  }
  else 
  {
    offset = 120;
pakOffset=10;
     console.log("Screen:Small:Offset"+offset);
  }
}


function updateMobileOffset()
{
  talksMobileOffset=0;
  schoolboothOffset=0;
  toursOffset=190;
  nightFest=0;

  if ( $(window).width() > 939) 
  {
    mobileOffset = 0;
    console.log("Screen:Large:Offset:"+offset);
    schoolboothOffset=20;
  }
  else if( $(window).width() > 439) 
  {
    mobileOffset = 40;
    talksMobileOffset=-27;
    schoolboothOffset=-30;
     console.log("Screen:Medium:Offset"+offset);
     toursOffset=10;
     nightFest=0;
     nightFest=-15;
     talksMobileOffset=-45;
  }
  else 
  {
    mobileOffset = 35;
    talksMobileOffset=37;
    schoolboothOffset=-60;
pakOffset=10;
    console.log("Screen:Small:Offset"+offset);
    nightFest=-25;
  }
}

$(window).on( "orientationchange", function( event ) 
{
  // if(isMobile)
  // {
  //   updateMobileOffset();
  //   console.log('mobile Browser');

  // }else
  // {
  //   updateOffset();
  //   console.log('normal Browser');
    
  // }

  location.reload();
  
});

$(function() 
{

  if(isMobile)
  {
    updateOffset();
    updateMobileOffset();
    console.log('mobile Browser');

  }else
  {
    updateOffset();
    console.log('normal Browser');

  }

  

  $('a[href*="#"]:not([href="#"])').click(function() 
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
    {
      var target = $(this.hash);

      console.log(target.length);
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
           scrollTop:  $('.container.section_3.section_bg .section_gra .section_title .inner').first().offset().top - ($('.container.section_3.section_bg .section_gra .section_title .inner div').height()+$('.container.section_3.section_bg .section_gra .section_title .inner div').height()/1+mobileOffset),
       }, 1000);

    }else if(this.hash == "#Culture")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_4 .section_gra .section_title .inner').first().offset().top - ($('.container.section_4 .section_gra .section_title .inner div').height()+$('.container.section_4 .section_gra .section_title .inner div').height()/1),
       }, 1000);

    }else if(this.hash == "#Festival")
    {
     $('html, body').animate({
           scrollTop:  $('.container.section_5.section_bg .section_gra .section_title .inner').first().offset().top - ($('.container.section_5.section_bg .section_gra .section_title .inner div').height()+$('.container.section_5.section_bg .section_gra .section_title .inner div').height()/1+mobileOffset+nightFest),
       }, 1000);
     
    }else if(this.hash == "#There")
    {

     $('html, body').animate({
           scrollTop:  $('.container.section_6 .section_gra .section_title .inner').first().offset().top - ($('.container.section_6 .section_gra .section_title .inner div').height()+$('.container.section_6 .section_gra .section_title .inner div').height()/1),
       }, 1000);

    }else if(this.hash == "#Schoolbooth")
    {

     $('html, body').animate({
           scrollTop:  $('.container.section_3 .section_gra .container h3 ').first().offset().top - ($('.container.section_3 .section_gra .container h3').height()+$('.container.section_3 .section_gra .container h3').height()/1+offset+schoolboothOffset),
       }, 1000);

    }
    else if(this.hash == "#Tours")
    {

      console.log('Tours');

     // $('html, body').animate({
     //       scrollTop:  $("#Tours").offset().top-offset// +  ($('.container.section_3 .section_gra .container ul').height()/1+offset),
     //   }, 1000);

$('html, body').animate({
            scrollTop: $("#Tours").offset().top-($('#Tours').offset().top - $('.container.section_4 .section_gra .container').offset().top)+offset+mobileOffset+toursOffset,
         }, 2000);

    }
    else if(this.hash == "#Talks")
    {

      var diff = $('#Talks').offset().top - $('#Talks').parent().offset().top - $('#Talks').parent().scrollTop();

      $('html, body').animate({
            scrollTop: $("#Talks").offset().top-($('#Talks').offset().top - $('.container.section_3 .section_gra .container').offset().top)+offset+mobileOffset+talksMobileOffset,
         }, 2000);

    }else if(this.hash == "#Campus-tours")
    {

      console.log('Campus-tours');

      $('html, body').animate({
            scrollTop: $("#Campus-tours").offset().top-($('#Campus-tours').offset().top - $('.container.section_4 .section_gra .container').offset().top)+offset+mobileOffset+toursOffset,
         }, 2000);

    }else if(this.hash == "#pak-entrepreneurs")
    {

      console.log('pak-entrepreneurs', offset , mobileOffset);

      $('html, body').animate({
            scrollTop: $("#pak-entrepreneurs").offset().top-offset-mobileOffset-pakOffset,
         }, 2000);

    }else
    {
     console.log(this.hash);
    }
    
        return false;
      }
    }
  });
});



  $(document).ready(function(){
    
$('.bxslider').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: false
});
  });