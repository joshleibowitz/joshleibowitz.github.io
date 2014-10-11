$(document).ready(function(){
  console.log('loaded bro');
  new WOW().init();

  $(window).scroll(scrollAnimation);

  slowScroll($('#circle-progress'), $('#progress'), 2000);
  slowScroll($('#circle-contact'), $('#contact'), 2000);

  $('.fa-arrow').mouseover(function(){
    $(this).removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-o-down');
  });

  $('.fa-arrow').mouseleave(function(){
    $(this).addClass('fa-arrow-circle-down').removeClass('fa-arrow-circle-o-down');
  });


});

function progressBar(percent, $element) {
  var progressBarWidth = percent * $element.width() / 100;
  $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

function calculateProgress(){

  var totalDateDiff = 1395;
  var graduationDate = new Date(2017,4,27);
  var startDate = new Date(2013,7,1);
  var today = new Date();
  Date.daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
  };

  var dateDiff = Date.daysBetween(startDate, today);
  var percenage = dateDiff / totalDateDiff;
  return Math.round(percenage * 100);

}

function scrollAnimation(){
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var progressBarPos = $('#progressBar').position().top + $('#progressBar').height();
  if (scrollBottom > progressBarPos){
    progressBar(calculateProgress(), $('#progressBar'));
  }
}

function slowScroll($el, $dest, duration){
  $el.click(function(e){
    e.preventDefault();
    $('html body').animate({
      scrollTop: $dest.offset().top
    }, duration);
  });
}
