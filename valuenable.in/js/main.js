$('.moreless-button').click(function () {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Know More") {
    $(this).text("Know Less")
  } else {
    $(this).text("Know More")
  }
});

$(document).ready(function () {
  $(window).on('load', function () {
    $('#loading').fadeOut('slow');
    $('body').css({ 'overflow': 'visible' });
  });

  window.onscroll = function () { myFunction() };

  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      // if (window.matchMedia("(max-device-width: 960px)").matches) {
      header.classList.add("sticky");
      // }
    } else {
      header.classList.remove("sticky");
    }
  }

  $(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".nav-main").toggleClass("open");
    $("body").toggleClass("nav_open");
    $("html").toggleClass("menu_open");
  });
  if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".intervent_list ul li").click(function () {
      //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
      //strange
    });
    $(".partenaires_con ul li").click(function () {
      //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
      //strange
    });
  }

});

// $('a[href*="#"]').on('click', function(e) {
//   e.preventDefault()

//   $('html, body').animate(
//     {
//       scrollTop: $($(this).attr('href')).offset().top,
//     },
//     500,
//     'linear'
//   )
// });



$('.home-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 500,
});



if (document.documentElement.clientWidth < 991) {
  (function ($) {
    $(document).ready(function () {
      $('.nav-main ul li.menu-item-has-children > a').after('<span class="sub-nav"></span>');

      $('.nav-main ul li').children('ul').toggle();
      $('.nav-main ul li span').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp(200);
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown(200);
          element.siblings('li').children('ul').slideUp(200);
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp(200);
        }
      });

    });
  })(jQuery);
}


//upload btn
$(document).ready(function () {
  $('.btn').on('click', function () {
    $('.file').trigger('click');
  });

  $('.file').on('change', function () {
    var fileName = $(this)[0].files[0].name;
    $('#file-name').val(fileName);
  });
})


$(document).ready(function (e) {

  $('.nav-tabs-dropdown').each(function (i, elm) {
    $(elm).text($(elm).next('ul').find('li a.active').text());
  });

  $('.nav-tabs-dropdown').on('click', function (e) {
    e.preventDefault();
    $(e.target).toggleClass('open').next('ul').slideToggle();
  });

  $('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function (e) {
    e.preventDefault();
    $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
  });
});


$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');
  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});


$(".testimonial-slider").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 500,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$(".slider-board").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 500,
});
$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno - 1);
});





$('.slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-text',
  dots: true,
  focusOnSelect: true
});
$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});




$('.slider-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-left'
});
$('.slider-left').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-box',
  dots: true,
  focusOnSelect: true
});
$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-left').slick('slickGoTo', slideno - 1);
});



//   const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }

//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));


$(document).ready(function () {
  $('.accordion a').click(function () {
    $(this).toggleClass('active');
    $(this).next('.content').slideToggle(400);
  });
});

$("button.user").click(function () {
  $("ul").toggleClass("active");
});


$(document).ready(function () {
  // policy
  $("#hide").click(function () {
    $("#policy1").toggleClass("d-none d-block");
  });
  // platform
  $("#hide1").click(function () {
    $("#platform").toggleClass("d-none d-block");
  });



  var w = window.matchMedia("(max-width: 900px)");
  var vid = document.getElementById("ve-video");
  var source = document.createElement("source");
  source.id = "hvid";
  source.setAttribute("type", "video/mp4");
  vid.appendChild(source);

  if (w.matches) {

    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", "videos/ValueEnable_Low.mp4");
    vid.load();
    // vid.play();
  } else {
    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", "videos/ValueEnable_High.mp4");
    vid.load();
    // vid.play();
  }

  window.addEventListener("resize", function () {
    // var w = window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches || screen.width <= 960;
    var w = window.matchMedia("(max-device-width: 960px)");
    // var w = window.matchMedia("(max-width: 1000px)");
    console.log(Math.max(window.screen.width, window.innerWidth));

    var vid = document.getElementById("ve-video");
    var source = document.getElementById("hvid");

    if (w.matches) {
      header.classList.add("sticky");
      vid.pause();
      source.src = "videos/ValueEnable_Low.mp4";
      vid.load();
      // vid.play();
    } else {
      vid.pause();
      source.src = "videos/ValueEnable_High.mp4";
      vid.load();
      // vid.play();
    }
  });
});
function adjustHeight() {
  var actual_width = window.innerWidth;
  console.log(actual_width);
  if (actual_width < 991) {
    var a = document.getElementById('link-add');
    a.href = "privacy.html"
  }

}
