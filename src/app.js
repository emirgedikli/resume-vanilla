import "./assets/css/styles.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"

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