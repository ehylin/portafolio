$(function(){

  $('[data-toggle="popover"]').popover();

  $(".nav-link").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var mov = this.hash;

      $("html, body").animate({
        scrollTop: $(mov).offset().top
      }, 600, function(){
        window.location.hash = mov;
      });
    }
  });



});
