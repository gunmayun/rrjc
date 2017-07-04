/**
 * Created by Administrator on 2017/7/3.
 */
;(function ($) {
    $.ajax({
        url:'../public/template/header_template.html',
        async:false,
        success:function (data) {
            $('header').html(data);
        }
    });
    $.ajax({
        url:'../public/template/nav_template.html',
        async:false,
        success:function (data) {
            $('nav').html(data);
        }
    });
    $.ajax({
        url:'../public/template/footer_template.html',
        async:false,
        success:function (data) {
            $('footer').html(data);
        }
    })
})(jQuery);