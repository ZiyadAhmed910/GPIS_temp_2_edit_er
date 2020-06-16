$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });



     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('.school-logo').addClass('school-logo-black');
           }

           else {
                 $('.school-logo').removeClass('school-logo-black');
           }
     })
     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('.green').addClass('green-black');
           }

           else {
                 $('.green').removeClass('green-black');
           }
     })


     var prevScrollpos = window.pageYOffset;
     window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("gren").style.padding-top = "-167px";
        document.getElementById("gren").style.transition = "0.3s";
      } else {
        document.getElementById("gren").style.top = "-335px";
        document.getElementById("gren").style.transition = "0.3s";
      }
      prevScrollpos = currentScrollPos;
     }


     var prevScrollpos = window.pageYOffset;
     window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("logoID").style.width = "12%";
        document.getElementById("logoID").style.transition = "0.3s";
      } else {
        document.getElementById("logoID").style.width = "0px";
        document.getElementById("logoID").style.transition = "0.3s";
      }
      prevScrollpos = currentScrollPos;
     }
