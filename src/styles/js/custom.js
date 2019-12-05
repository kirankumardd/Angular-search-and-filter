$(document).ready(function () {
  $('.loader-wrap').delay(2000).fadeOut();
  $(".bg-load").delay(200).fadeOut(400);
  $(".back-img").delay(200).fadeOut(500);
  $('.header-wrap').load('include/header.html');
  $('.footer-wrap').load('include/footer.html');
  $('.all-module').load('componets/action-module.html');
  $('.scroll-down-a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('data-target')).offset().top
    }, 500, 'linear');
  });
  $('[data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip comman-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    container: "body"
  });
  $(".btn-search-wrap-li .btn-icon-wrap").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('btn-search-wrap-li-toggle');
  });
//for form animation with slider text
  $('.form-flow-carousel').on('slide.bs.carousel', function (e11) {
    if (e11.relatedTarget.id === 'firstSlide') {
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('completed');
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('active');
      $('#progress-bar-slid1 em').html('1');
      $('#progress-bar-slid2 em').html('2');
      $('#progress-bar-slid3 em').html('3');
      $('#progress-bar-slid4 em').html('4');
      $('#progress-bar-slid1').addClass('active');
      //$('#progress-bar-slid1 em').html();
    } else if (e11.relatedTarget.id === 'secondSlide') {
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('completed');
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('active');
      $('#progress-bar-slid1').addClass('completed');
      $('#progress-bar-slid2').addClass('active');
      $('#progress-bar-slid1 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid2 em').html('2');
      $('#progress-bar-slid3 em').html('3');
      $('#progress-bar-slid4 em').html('4');
    }
    else if (e11.relatedTarget.id === 'thirdSlide') {
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('completed');
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('active');
      $('#progress-bar-slid1 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid2 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid1').addClass('completed');
      $('#progress-bar-slid2').addClass('completed');
      $('#progress-bar-slid3').addClass('active');
      $('#progress-bar-slid3 em').html('3');
      $('#progress-bar-slid4 em').html('4');
    }
    else if (e11.relatedTarget.id === 'fourthSlide') {
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('completed');
      $('#progress-bar-slid1, #progress-bar-slid2, #progress-bar-slid3, #progress-bar-slid4').removeClass('active');
      $('#progress-bar-slid1 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid2 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid3 em').html('<i class="fa fa-check" aria-hidden="true"></i>');
      $('#progress-bar-slid1').addClass('completed');
      $('#progress-bar-slid2').addClass('completed');
      $('#progress-bar-slid3').addClass('completed');
      $('#progress-bar-slid4').addClass('active');
      $('#progress-bar-slid4 em').html('4');
    }
  });
  $("#schedule-checkbox").click(function () {
    $('.suspend-text-wrap').fadeIn();
  });
  $("#donotrepeat-checkbox").click(function () {
    $('.suspend-text-wrap').fadeOut();
  });
//filter menu
  $('.filter-btn').popover({
    placement: 'bottom',
    html: true,
    template: '<div class="popover comman-popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
    content: $('.popover-form').html()
  }).on('click', function () {
    $('.btn-clear, .btn-apply, .btn-cancel').click(function () {
      $('.popover-form').popover('hide');
    });
    $('.default-date-picker').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true
    });
  });
});