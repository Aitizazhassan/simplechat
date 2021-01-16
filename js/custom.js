

$(document).ready(function(){
    $(".open-button").click(function(){
      $("#loginform").fadeIn();
      $('.open-button').hide();
        $('.cancel').show();
    //   $("#div2").fadeIn("slow");
    //   $("#div3").fadeIn(3000);
    });

    $(".closeform").click(function(){
        $("#loginform").fadeOut();
      //   $("#div2").fadeIn("slow");
      //   $("#div3").fadeIn(3000);
      });

      $(".cancel").click(function(){
        $("#loginform").hide();
        $('.open-button').show();
        $('.cancel').hide();
      //   $("#div2").fadeIn("slow");
      //   $("#div3").fadeIn(3000);
      });
      
  });

  