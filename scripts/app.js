$(document).ready(function(){
  $.Resize.initialize();
  $.Position.initialize();

  $(window).resize(function(){
    $.Resize.initialize();
  })
})

$.Resize = {
  initialize: function(){
    this.height();
    this.width();
  },

  height: function() {
    var height = ($(window).height() - $('#inner').height())/2;
    if (height > 0)
    $('#outer').css('margin-top',height);
  },

  width: function() {
    var width = ($(window).width() - $('#inner').width())/2;
    if (width > 0)
    $('#outer').css('margin-left',width);
  }
}

$.Position = {
  initialize: function() {
    this.position();
  },

  position: function() {
    if ($('#content').height() < $('.menu').height()){
      $('.menu').css('position','static');
      return;
    }
    var left = $('#content').offset().left;
    var top = $('#content').offset().top;
    $('.menu').css('left', left + 720 + 'px');
    $('.menu').css('top', top + 36 + 'px');
  }
}