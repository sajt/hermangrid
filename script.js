$( document ).ready(function() {
  for (var i = 1; i <= 100; i++) {
    $('.grid-container').append('<div></div>');
  };
  $('#width button').click(function() {
      var value = $('#width input').val();
      value = getvalue(this, value, 5, 85);
      $('#width input').val(value);
      $('.grid-container div').width(value);
      $('.grid-container div').height(value);
      redraw(value, $('#border input').val());
    });
  $('#border button').click(function() {
      var value = $('#border input').val();
      value = getvalue(this, value, 1, 50);
      $('#border input').val(value);
      $('.grid-container div').css("margin", value);
      redraw($('#width input').val(), value);
    });
});

function getvalue(button, value, dif, max) {
  value = parseInt(value);
  var sign = $( button ).html();
    if (sign == '-') {
      if (value >= dif) {
        value -= dif;
      }
    }
    if (sign == '+') {
      if (value < max) {
        value += dif;
      }
    }
    //remove all

 return value;
}

function redraw(width, border) {
  var one = 2 * parseInt(border) + parseInt(width);
  $('.grid-container').width( one * 10);
}
