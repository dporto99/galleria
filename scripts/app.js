$(document).ready(function(){
  $.Position.initialize();

  $(window).resize(function(){
    $.Position.initialize();
  })
})

$.Position = {
  initialize: function(){
    var height = ($(window).height() - $('#inner').height())/2;
    if (height > 0){
      $('#inner').css('top',(height-5));
    }
  }
}
