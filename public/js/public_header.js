/**
 * Created by jiajun on 2017/7/3.
 */
function public_header() {
    //qq图标鼠标移入时显示文字提醒
    showMsg('qq','qqkf');
    //微信图标鼠标移入时显示二维码
    showMsg('wx','codema');
    //微博图标鼠标移入时显示信息
    showMsg('sina','weibo');
    function showMsg(id1,id2) {
        var $target = $('#'+id1);
        var $Content = $('#'+id2);
        $target.hover(function () {
            $Content.show();
        },function () {
            $Content.hide();
        });
        $Content.hover(function () {
            $(this).show();
        },function () {
            $(this).hide();
        });
    }
}