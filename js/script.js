$(document).ready(function(){ 

 // THIS FADES OUT WHITE BACKGROUND IMMEDIATELY ONCE THE PAGE IS VIEWED
     $(".fade-out").fadeOut(1500);

  // FADE IN HISTOGRAMS AND FIXED NAV BAR
  $(window).on('scroll',function() {
        var scrolltop = $(this).scrollTop();

        if(scrolltop >= 480) {
          $('#fixedbar').fadeIn(500);
        }

        if(scrolltop >= 1350) {
          $('.histogram').fadeIn(800);
        }

        if(scrolltop >= 2300) {
          $('.histogram-2').fadeIn(800);
        }
        
        else if(scrolltop <= 450) {
          $('#fixedbar').fadeOut(250);
        }
  });

  
   // PHOTOSLIDE
  // declare required variables
  var theImage = $('ul li img');     
  var theWidth = theImage.width();
  var currMarg = 0;
  var newMarg;

  //get total of image sizes and set as width for ul 
  var totalWidth = theImage.length * theWidth;
  $('ul.gallery').css('width', theImage);

  $('.next').click(function(){
      if(currMarg - theWidth != -totalWidth) {
        newMarg = currMarg - theWidth;
      } else {
        newMarg = 0;
      }
      updatePosition();
  });

  $('.prev').click(function(){
      if(currMarg !== 0) {
        newMarg = currMarg + theWidth;
      } else {
        newMarg = -totalWidth + theWidth;
      }
      updatePosition();
  });

  var updatePosition = function() {
    $('ul.gallery').animate({ "margin-left": (newMarg)}, 300);
    currMarg = newMarg;
  }


  // Cache the Window object
   $window = $(window);
                
   $('div[data-type="background"]').each(function(){
           var $bgobj = $(this); // assigning the object
                          
            $(window).scroll(function() {
                          
          // Scroll the background at var speed
          // the yPos is a negative value because we're scrolling it UP!                
          var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
          
          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
          
      }); // window scroll Ends
 });  // closes function



  //REPEAT FOOTBALL PITCH FADE OUT AND IN
  setInterval(function(){ 
            $(".football-right").fadeOut(1000,function(){
                  $(".football-left").fadeOut(1000, function(){
                       $(".football-left").fadeIn(800);
                       $(".football-right").fadeIn(800);
          });
      });
  }, 1700);  


   setInterval(function () {
     var value = parseInt($('#count').html());
     value++;
     $('#count').html(value);
}, 2000);





var user = [];// OBJECT USING LITERAL NOTATION

            // CREATE JQUERY OBJECTS
      var userNameInput = $('#user_name');
      var userEmailInput = $('#user_email');
      var userNameError = $('#user_name_error');
      var userEmailError = $('#user_email_error');
      var addUserInfo = $('#addUserInfo');

            // INITIALLY HIDE THE ERROR MESSAGES
      $('.hide').hide();

            // METHOD WITH CALLBACK
      addUserInfo.submit(function(){

      var userNameVal = userNameInput.val();
      var userEmailVal = userEmailInput.val();

        function validateName() {
        if(userNameVal.length < 3){
          userNameError.show();
          return false;
        }
        else {
          userNameError.hide();
          return true;
        }
          }

          function validateEmail() {
            var e = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
        if(e.test(userEmailVal)){
          userEmailError.hide();
          return false;
        }
        else {
          userEmailError.show();
          return true;
        }
          }

              // VALIDATE NAMES
          if(validateName() & validateEmail()) {
            user.name = userNameVal;
            user.email = userEmailVal;
          }
              
              // STOP ONCE DONE
          return false;

    }); // SUBMIT FUNCTION 


          $("a[href='#book']").on("click", function(event) {
            event.stopPropagation();
            event.preventDefault();
            $("#slideDown").slideToggle(800);
          });

          $("a[href='#lineup']").click(function() {
                  $('html, body').animate({
                  scrollTop: $("#gig-details").offset().top
                }, 2000);
  });







 
});//DOCUMENT READY




		






