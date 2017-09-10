$(window).resize(function(){
  $(".ftitle").css({
    position: "absolute",
    left: ($("#fstep").width() - $(".ftitle").outerWidth())/2,
    top: ($("#fstep").height() - $(".ftitle").outerHeight())/2
  });
})

$(function(){
  $(window).resize();
  $(window).resize();
})

$(document).ready(function(){
  $("#sbutton").mouseenter(function(){
    $("#sbutton").css({"background-color":"rgba(243,114,41,1)","border":"1px solid rgba(243,114,41,1)"});
  });
})

$(document).ready(function(){
  $("#sbutton").mouseleave(function(){
    $("#sbutton").css({"background-color":"rgba(246,146,89,1)","border":"1px solid rgba(246,146,89,1)"});
  });
})

$(document).ready(function(){
  $("#ssbutton").mouseenter(function(){
    $("#ssbutton").css({"background-color":"rgba(243,114,41,1)","border":"1px solid rgba(243,114,41,1)"});
  });
})

$(document).ready(function(){
  $("#ssbutton").mouseleave(function(){
    $("#ssbutton").css({"background-color":"rgba(246,146,89,1)","border":"1px solid rgba(246,146,89,1)"});
  });
})

$(document).ready(function(){
  $(".nitem").css("color","rgba(255,255,255,1)");
  $(".nitem").hover(
    function(){
      $(this).css("color","rgba(255,255,255,1)");
      $(this).css("background-color","rgba(255,255,255,0.3)");
    },
    function(){
      $(this).css("color","rgba(255,255,255,1)");
      $(this).css("background-color","rgba(255,255,255,0)");
    }
  );
  $("#headBtn").hover(
    function(){
      $(this).css("background-color","rgba(255,255,255,0.3)");
    },
    function(){
      $(this).css("background-color","rgba(255,255,255,0)");
    }
  );
  $(function(){
    $(window).scroll(function(){
      if ($(window).scrollTop() > 50) {
        $("#fnav").css("background-color","rgba(242,242,242,1)");
        $(".nitem").css("color","rgba(101,101,101,1)");
        $("#nimg").attr("src","logo-cloudflare-dark.svg");
        $("#headBtn").css({"background-color":"rgba(64,139,201,1)","border":"1px solid rgba(64,139,201,1)"});
        $("#nbut span").css("background-color","rgba(0,0,0,1)");
        $(".nitem").hover(
          function(){
            $(this).css("color","rgba(246,146,89,1)");
            $(this).css("background-color","rgba(255,255,255,1)");
          },
          function(){
            $(this).css("color","rgba(101,101,101,1)");
            $(this).css("background-color","rgba(255,255,255,0)");
          }
        );
        $("#headBtn").hover(
          function(){
            $(this).css("background-color","rgba(64,139,201,0.7)");
          },
          function(){
            $(this).css("background-color","rgba(64,139,201,1)");
          }
        );
      } else {
        $("#fnav").css("background-color","rgba(0,0,0,0)");
        $(".nitem").css("color","rgba(255,255,255,1)");
        $("#nimg").attr("src","logo-cloudflare.svg");
        $("#headBtn").css({"background-color":"rgba(255,255,255,0)","border":"1px solid rgba(255,255,255,1)"});
        $("#nbut span").css("background-color","rgba(255,255,255,1)");
        $(".nitem").hover(
          function(){
            $(this).css("color","rgba(255,255,255,1)");
            $(this).css("background-color","rgba(255,255,255,0.3)");
          },
          function(){
            $(this).css("color","rgba(255,255,255,1)");
            $(this).css("background-color","rgba(255,255,255,0)");
          }
        );
        $("#headBtn").hover(
          function(){
            $(this).css("background-color","rgba(255,255,255,0.3)");
          },
          function(){
            $(this).css("background-color","rgba(255,255,255,0)");
          }
        );
      }
    });
  });
})

var step = 0;
function flashText() {
  step++;
  var content = document.getElementById("spe");
  if (step == 6) {step = 1}
  if (step == 1) {content.innerHTML = "ecommerce stores"}
  if (step == 2) {content.innerHTML = "SaaS products"}
  if (step == 3) {content.innerHTML = "mobile applications"}
  if (step == 4) {content.innerHTML = "APIs"}
  if (step == 5) {content.innerHTML = "websites"}
  setTimeout("flashText()",2000);
  $(window).resize();
}
flashText();

Vue.component('sgup-button',{
  template: '<button>Sign Up</button>'
})

var fbtn = new Vue({
  el: '#signupbutton',
  data: {
    sgbstyle: {
      position: 'relative',
      top: '1px',
      width: '180px',
      height: '32px',
      color: 'rgba(255,255,255,1)',
      backgroundColor: 'rgba(246,146,89,1)',
      border: '1px solid rgba(246,146,89,1)',
      borderRadius: '4px'
    }
  }
})

var sbtn = new Vue({
  el: '#sedsignupbutton',
  data: {
    ssgbstyle: {
      width: '180px',
      height: '32px',
      color: 'rgba(255,255,255,1)',
      backgroundColor: 'rgba(246,146,89,1)',
      border: '1px solid rgba(246,146,89,1)',
      borderRadius: '4px'
    }
  }
})
