$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 
  $('a[href*="#"]').on('click',function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
      },
      500, 
      'linear'
    );
  });

  $('a[id="download-link"]').click(function(e) {
    e.preventDefault(); 
    window.location.href = 'moncv.pdf';
  }); 

  let popup_div = [ 
    {name: "#popup1", trigger: "#open-popup1", closer: "#close-popup1"},
    {name: "#popup2", trigger: "#open-popup2", closer: "#close-popup2"},
    {name: "#popup3", trigger: "#open-popup3", closer: "#close-popup3"},
    {name: "#popup4", trigger: "#open-popup4", closer: "#close-popup4"},
    {name: "#popup5", trigger: "#open-popup5", closer: "#close-popup5"},
    {name: "#popup6", trigger: "#open-popup6", closer: "#close-popup6"}
  ];
  var popup_name = "", popup_trigger = "", popup_closer = "";
  
  //not finished
  popup_div.forEach(popup => {
    popup_name = popup.name;
    popup_trigger = popup.trigger;
    popup_closer = popup.closer;
    // console.log(popup_name, popup_trigger, popup_closer);
  
    // Hide the pop-up on page load
    $(popup_name).hide();
  })

});