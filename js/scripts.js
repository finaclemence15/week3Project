    // Toggle function

$(document).ready(function() {
    $("img#icon1").click(function() {
      $(".p1").toggle();
    });
    $("img#icon2").click(function() {
        $(".p2").toggle();
      });
      $("img#icon3").click(function() {
        $(".p3").toggle();
      });

    // Image Hover
    $(".project1").hide();
    $("#work4").css({opacity:2});
    $("#img4").hover(function(){
    $(this).css({opacity:0.4});
    $(".project1").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project1").fadeOut();
    });

    $(".project2").hide();
    $("#work3").css({opacity:2});
    $("#img3").hover(function(){
    $(this).css({opacity:0.4});
    $(".project2").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project2").fadeOut();
    });

    $(".project3").hide();
    $("#work2").css({opacity:2});
    $("#img2").hover(function(){
    $(this).css({opacity:0.4});
    $(".project3").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project3").fadeOut();
    });

    $(".project4").hide();
    $("#work1").css({opacity:2});
    $("#img1").hover(function(){
    $(this).css({opacity:0.4});
    $(".project4").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project4").fadeOut();
    });

    $(".project5").hide();
    $("#work5").css({opacity:2});
    $("#img5").hover(function(){
    $(this).css({opacity:0.4});
    $(".project5").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project5").fadeOut();
    });

    $(".project6").hide();
    $("#work6").css({opacity:2});
    $("#img6").hover(function(){
    $(this).css({opacity:0.4});
    $(".project6").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project6").fadeOut();
    });

    $(".project7").hide();
    $("#work7").css({opacity:2});
    $("#img7").hover(function(){
    $(this).css({opacity:0.4});
    $(".project7").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project7").fadeOut();
    });

    $(".project8").hide();
    $("#work8").css({opacity:2});
    $("#img8").hover(function(){
    $(this).css({opacity:0.4});
    $(".project8").fadeIn();
    }, function(){
    $(this).stop().css({opacity:2})
    $(".project8").fadeOut();
    });
});
// submit Button
function submition(){
  var name , email, textArea;
  name = document.getElementById("Name").value;
  email = document.getElementById("Email").value;
  textArea = document.getElementById("Text").value;
  alert(" " + name + " we have received your message. Thank you for reaching out to us. ");
}