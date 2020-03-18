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
			url: "../new/mail.php", //Change
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
            // alert("Thank you!");
            // $('.btn-finish').css('opacity', '0.5').css('pointer-events', 'none');
            // $('#modalKviz').removeClass('disabled');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });

    // $('form').submit(function() { 
    //     var th = $(this);
    //     $($(this).parent().parent().parent()).each(function () {
    //         th.find('.rfield').addClass('empty_field');

    //             // Функция проверки полей формы
    //             form.find('.rfield').each(function(){
    //             if($(this).val() != ''){
    //                 // Если поле не пустое удаляем класс-указание
    //                 $(this).removeClass('empty_field');

    //                 if (!form.find('.empty_field').length) {
    //                     var btn = th.find('.kviz__btn');
    //                     var numModal = btn.attr('data-modal');
    //                     var modal =  $(numModal);
    //                     var modalWrap = $('.modal__wrap');
    //                     modalWrap.removeClass('fadeOutUp');
    //                     modalWrap.addClass('fadeInDown');
    //                     $('.modal').addClass('disabled');
    //                     modal.removeClass('disabled');
    //                     modal.addClass('flex');
    //                     $('body').addClass('body-modal-open');
    //                     console.log('form');
    //                     $.ajax({
    //                         type: "POST",
    //                         url: "../new/mail.php", //Change
    //                         data: th.serialize()
    //                     }).done(function() {
    //                         // alert("Thank you!");
    //                         // $('.btn-finish').css('opacity', '0.5').css('pointer-events', 'none');
    //                         // $('#modalKviz').removeClass('disabled');
    //                         setTimeout(function() {
    //                             // Done Functions
    //                             // th.trigger("reset");
    //                         }, 1000);
    //                     });
    //                 }

    //             } else {}
    //         });
    //     });
	// 	return false;
    // });

    //   $('.kviz__btn').on('click', function(e){
    //     // e.preventDefault();
    //     var btn = $(this);
    //     console.log(btn);
    //     $($(this).parent().parent().parent()).each(function () {
    //         var form = $(this);
    //         form.find('.rfield').addClass('empty_field');

    //             // Функция проверки полей формы

    //             form.find('.rfield').each(function(){
    //             if($(this).val() != ''){
    //                 // Если поле не пустое удаляем класс-указание
    //                 $(this).removeClass('empty_field');

    //             if (!form.find('.empty_field').length) {
    //                 var numModal = btn.attr('data-modal');
    //                 var modal =  $(numModal);
    //                 var modalWrap = $('.modal__wrap');
    //                 modalWrap.removeClass('fadeOutUp');
    //                 modalWrap.addClass('fadeInDown');
    //                 $('.modal').addClass('disabled');
    //                 modal.removeClass('disabled');
    //                 modal.addClass('flex');
    //                 $('body').addClass('body-modal-open');
    //                 console.log('form');
    //                 form2 = form.closest('form');
    //                 jQuery.ajax({
    //                     type: "POST",
    //                     url: "../new/mail.php", //Change
    //                     data: th.serialize()
    //                 }).done(function() {
    //                     alert("Thank you!");
    //                     setTimeout(function() {
    //                         // Done Functions
    //                         // th.trigger("reset");
    //                     }, 1000);
    //                 });
    //                 console.log(btn);
    //                 // btn.attr('href', "#").removeClass('kviz__btn').css('pointer-events', 'none');
    //                 // btn.parent().css('opacity', '0.5').css('pointer-events', 'none');
    //                 // fbq('track', 'Lead');
    //                 }

    //             } else {}
    //         });
    //     })
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