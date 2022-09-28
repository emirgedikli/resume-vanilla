import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";

$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.