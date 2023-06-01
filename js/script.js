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
    window.location.href = 'cv.pdf';
  }); 

  // scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }
      else {
        entry.target.classList.remove('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))
});