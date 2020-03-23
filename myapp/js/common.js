$(function() {
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            if ( window.innerWidth < 992 || window.screen.width < 992) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            return false;
        });
    }

    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+7(999) 999-9999");
        });
    }

    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        
        //popup
        $(".modal-open").click(function (e){
          e.preventDefault();
          var numModal = $(this).attr('href');
          var modal =  $(numModal);
          modalWrap.removeClass('fadeOutUp');
          modalWrap.addClass('fadeInDown');
          modal.removeClass('disabled');
          modal.addClass('flex');
          $('body').addClass('body-modal-open');
          // body.addClass('body-modal');
        });

        $('.modal-close').click(function (){
      
          modalWrap.removeClass('fadeInDown');
          modalWrap.addClass('fadeOutUp');
          setTimeout(function() {
              $('.modal').addClass('disabled');
            }, 700);
          setTimeout(function() {
              $('.modal').removeClass('flex');
              $('body').removeClass('body-modal-open');
            }, 800);  
      
        });
      
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
          var div = $(".modal__body"); // тут указываем ID элемента
          var close = $('.modal-close');
          if (close.is(e.target)) {
      
          } else if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
              var modalWrap = $('.modal__wrap');
              modalWrap.removeClass('fadeInDown');
              modalWrap.addClass('fadeOutUp');
              setTimeout(function() {
                  $('.modal').addClass('disabled');
              }, 700);
              setTimeout(function() {
                  $('.modal').removeClass('flex');
                  $('body').removeClass('body-modal-open');
              }, 800); 
            
          }
        });
      }

      $('form').submit(function() { 
        var th = $(this);
        console.log(th);
        console.log(th.find('.kviz__btn').attr('data-modal'));
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
            var numModal = th.find('.kviz__btn').attr('data-modal');
            var modal =  $(numModal);
            var modalWrap = $('.modal__wrap');
            modalWrap.removeClass('fadeOutUp');
            modalWrap.addClass('fadeInDown');
            $('.modal').addClass('disabled');
            modal.removeClass('disabled');
            modal.addClass('flex');
            $('body').addClass('body-modal-open');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
            }, 1000);
            if(th.hasClass('ya-return')){
                yaCounter59666617.reachGoal( 'CALLBACK' );
                console.log('ret');
            }
		});
		return false;
    });
    // $('.consult__icons a').click(function(){
    //     fbq('track', 'Lead_net');
    // });
    // $('.consult__icons a').click(function(){
    //     fbq('track', 'Lead_net');
    // });
    // $('.consult__icons a').click(function(){
    //     fbq('track', 'Lead_net');
    // });
    // $('.consult__icons a').click(function(){
    //     fbq('track', 'Lead_net');
    // });
});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');

        });

});



$(window).scroll(function(){
    $('.nav').toggleClass('active', $(this).scrollTop() > 0);
});