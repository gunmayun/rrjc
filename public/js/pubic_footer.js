/**
 * Created by Administrator on 2017/7/3.
 */
function public_footer() {
    //qq图标鼠标移入时显示文字提醒
    var $gzwm_qq_a = $('#gzwm .a1');
    var $gzwm_qq_content = $('.gzwm-qq');
    showFooterMsg($gzwm_qq_a,$gzwm_qq_content);
    //微信图标鼠标移入时显示二维码
    var $gzwm_wx_a = $('#gzwm .a2');
    var $gzwm_wx_content = $('.gzwm-wx');
    showFooterMsg($gzwm_wx_a,$gzwm_wx_content);
    //新浪微博鼠标移入时显示信息
    var $gzwm_sina_a = $('#gzwm .a3');
    var $gzwm_sina_content = $('.gzwm-sina');
    showFooterMsg($gzwm_sina_a,$gzwm_sina_content);

    //手机APP鼠标移入时显示信息
    var $gzwm_phone_a = $('#gzwm .a4');
    var $gzwm_phone_content = $('.gzwm-phone');
    showFooterMsg($gzwm_phone_a,$gzwm_phone_content);
    function showFooterMsg($target,$Content) {
        var timer = null;
        $target.hover(function () {
            $Content.show();
        },function () {
            timer = setTimeout(function () {
                $Content.hide();
            },100);
        });
        $Content.hover(function () {
            clearTimeout(timer);
            $(this).show();
        },function () {
            $(this).hide();
        });
    }
}