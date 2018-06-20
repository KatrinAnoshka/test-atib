$(document).ready(function() {

/************** Adaptive menu **************/

  (function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

});//<--/(document).ready -->  