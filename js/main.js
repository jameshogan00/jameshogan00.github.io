$(document).ready(function(){ 



$('#about-scroll').click(function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:$(".about-section").offset().top}, 700);
   }); 


$('.menu-scroll-top').click(function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:$(".hero-unit").offset().top}, 700);
   }); 









   
$(".main-hist-bkg").animate({opacity: 1}, 2000);




 
   if($(window).width()<769)
        {
            $("#naughties-info").remove().insertAfter($("#award-image"));
            $("#award-image img").attr('src', 'images/badge-mobile.png');
            $("#about-heading img").attr('src', 'images/about-icon-mobile.png');
        } 

   if($(window).width()<489)
   {
    $("small a").text("Get Google Directions");
    $(".footer-list img").attr('src', 'images/logo-footer-mobile.png');
    $("#menu-button").show();


   }



$(".gaa-section").on("mouseenter", function() {
    $(this).find("a").animate({top: "40%", opacity: 1},200);
  }); 

$(".gaa-section").on("mouseleave", function() {
    $(this).find("a").animate({top: "60%", opacity: 0},200);
  }); 









});//DOCUMENT READY




		






