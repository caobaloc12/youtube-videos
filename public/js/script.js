(function ($) {
    $('#switch-view-mode').on('click', function () {
        $(this).text(function(i, text){
            if ($.trim(text) === "Theater Mode") {
                text = "Default Mode";
                $('#main-wrap').addClass('theater-mode');
                $('#main-wrap').find('.left').css({position: 'relative', top: 0-$('.wrap-box').height() - 10 + 'px'});
            } else {
                text = "Theater Mode";
                $('#main-wrap').removeClass('theater-mode');
                $('#main-wrap').find('.left').css({top: ''});
            }
          return text;
      });
    });
    $('.video-list').find('a').on('click', function () {
        $('#video-box').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-embed-id') + '?autoplay=1');
        $('#title-txt').find('h4').html($(this).attr('data-title'));
        // $('#desc').find('p').html($(this).attr('data-description'));
    });
})(jQuery);