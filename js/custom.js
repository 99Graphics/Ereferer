$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 50){
      $(".navbar").addClass("sticky-header");
    }else{
      $(".navbar").removeClass("sticky-header");
    }
  });
});
$('#banner').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }

});

jQuery(window).scroll(startCounter);
    function startCounter() {
        var hT = jQuery('.love_counter').offset().top,
            hH = jQuery('.love_counter').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.love_count').each(function () {
                var $this = jQuery(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter) + '%');
                    }
                });
            });
        }
    }
    jQuery(window).scroll(startCounter2);
    function startCounter2() {
        var hT = jQuery('.love_counter2').offset().top,
            hH = jQuery('.love_counter2').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter2);
            jQuery('.love_count2').each(function () {
                var $this = jQuery(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter) + '+');
                    }
                });
            });
        }
    }
  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

//new WOW().init();

$(".playbtn").click(function () {
  $(".videothumbnails").hide();
  $("#yt")[0].src += "?autoplay=1";
  $("#yt").show();
  });

$(document).ready(function () {
      //shared variable
      var max = 0,
          $els = $('.eulH');
      $els.each(function () {
          max = Math.max($(this).height(), max); 
      });

      $els.height(max)
  });
$(document).ready(function () {
      //shared variable
      var max = 0,
          $els = $('.eulH2');
      $els.each(function () {
          max = Math.max($(this).height(), max); 
      });

      $els.height(max)
  });
