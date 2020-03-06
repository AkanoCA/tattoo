$(document).on('click', '.menu__link', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
  });