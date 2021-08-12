$(document).ready(function () {
	$("#btn").hover(
	  function () {
		$("#btn").removeClass("fadeInRight");
		$("#btn").addClass("heartBeat");
		$("#btn").removeClass("animated");
	  },
	  function () {
		$("#btn").removeClass("heartBeat");
	  }
	);
  });

$(document).ready(function () {
  $("#buttonAnim").hover(
    function () {
      $("#buttonAnim").removeClass("fadeInRight");
      $("#buttonAnim").addClass("heartBeat");
	  $("#buttonAnim").removeClass("animated");
    },
    function () {
      $("#buttonAnim").removeClass("heartBeat");
    }
  );
});

$(function () {
  $(window).scroll(function () {
    $(".block").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInUp");
      }
    });
  });
  $(window).scroll(function () {
    $(".titleFuture").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInDown");
      }
    });
  });
  $(window).scroll(function () {
    $(".titleTicketInFuture").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInLeft");
      }
    });
  });

  $(window).scroll(function () {
    $(".input1").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInLeft");
      }
    });
  });

  $(window).scroll(function () {
    $(".input2").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInUp");
      }
    });
  });

  $(window).scroll(function () {
    $(".input3").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInDown");
      }
    });
  });

  $(window).scroll(function () {
    $(".input4").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInRight");
      }
    });
  });

  $(window).scroll(function () {
    $(".button").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInRight");
      }
    });
  });

  $(window).scroll(function () {
    $(".contentFooter").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});
