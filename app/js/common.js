$( document ).ready(function() {

  $('.menu-burger').on('click', function() {
  	$('.aside').toggleClass('aside_active');
  })

  jQuery('.scrollbar-inner').scrollbar();

	$(function () {
	  $('[data-toggle="colored"]').tooltip({
	  	template: '<div class="tooltip colored" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
	  });
	})

	$(function () {
	  $('[data-toggle="coloblue"]').tooltip({
	  	template: '<div class="tooltip coloblue" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
	  });
	})

})//end document.ready function
