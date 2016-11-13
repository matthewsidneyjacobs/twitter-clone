$(document).ready(function() {
  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function() {
    $('#tweet-controls').show();
  });

  $('.tweet-compose').on('click', function() {
    $('.tweet-compose').height("5em");
    $('#tweet-submit').prop('disabled',true);
  });


  $('.tweet-compose').keyup(function() {
      var charCount = 140-$('.tweet-compose').val().length;
      $('#char-count').html(charCount);

      if (charCount <= 10) {
        // alert("less than ten");
        $('#char-count').css("color","red");
      }
      else {
        $('#char-count').css("color","#AFAFAF");
      }
      if (charCount  <= 139 && charCount>= 0) {
        // alert("140characters")
        $('#tweet-submit').prop('disabled',false);
      }
      else {
        $('#tweet-submit').prop('disabled',true);
      }
  });
  $('#tweet-submit').click(function() {
      var $finishedtweet = $('<span>SIDSIDSID</span>')
      $('#stream').prepend($finishedtweet);
  })


});


// width: 100%;
// height: 2.5em;
