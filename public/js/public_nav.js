/**
 * Created by Administrator on 2017/7/3.
 */
function public_nav() {
    $('nav').on('mouseenter','.nav-li',function () {
        // if(!$(this).find('ul').is(':animated')){
        //     $(this).children('ul').slideDown();
        // }
        $(this).children('ul').stop().slideDown();
    });
    $('nav').on('mouseleave','.nav-li',function () {
        $(this).children('ul').stop().slideUp();
    });

    //两种解决多次鼠标移入时触发多次运动
    // 第一种：判断当前是否处于运动状态，如果不是，再添加运动
    //第二种：直接取消掉之前的运动队列。执行罪行的运动
}