$(document).ready(function() {
  $('#tweet-controls').hide();

  $('.tweet-actions').hide();

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
      var $finishedtweet = $('.tweet:first').clone();
      $finishedtweet.find('.avatar').prop('src', "img/alagoon.jpg")
      $finishedtweet.find('.fullname').html('Sid')
      $finishedtweet.find('.username').html('@sid')
      $finishedtweet.find('.tweet-text').html($('.tweet-compose').val())
      $('#stream').prepend($finishedtweet);
  });

  $('#tweet-submit').click(function () {
    $('.tweet-compose').val('');
    $('#char-count').val(140);
    $('#char-count').css("color","#AFAFAF");
    $('#char-count').html('140');
  });

  $('.tweet').hover(function () {
    $(this).find('.tweet-actions').show();} , function() {
    $(this).find('.tweet-actions').hide();
  });

  $('.stats').hide();
  $('.reply').hide();

  $('.tweet').click( function() {
    $(this).find('.stats').show();
    $(this).find('.reply').show();
  })

  $('.tweet').dblclick( function() {
    $(this).find('.stats').hide();
    $(this).find('.reply').hide();
  })
});
