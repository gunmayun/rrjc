/**
 * Created by Administrator on 2017/7/3.
 */
;(function ($) {
    $('nav').on('mouseenter','.nav-li',function () {
        if(!$(this).find('ul').is(':animated')){
            $(this).children('ul').slideDown();
        }
    });
    $('nav').on('mouseleave','.nav-li',function () {
        $(this).children('ul').slideUp();
    });
})(jQuery);