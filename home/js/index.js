/**
 * Created by Administrator on 2017/7/3.
 */
// 加载公共部分*************

$.ajax({
    url:'../public/template/header_template.html',
    success:function (data) {
        console.log(1);
        $('header').html(data);
        public_header();
    }
});//异步加载头部html片段，然后回调执行js
$.ajax({

    url:'../public/template/nav_template.html',
    success:function (data) {
        $('nav').html(data);
        console.log(2);
        public_nav();
    }
}); //异步加载导航菜单html片段，然后回调执行js

$.ajax({
    url:'../public/template/footer_template.html',
    async:true,
    success:function (data) {
        $('footer').html(data);
        console.log(3);
        public_footer();
    }
});//异步加载底部html片段，然后回调执行js

// 加载公共部分*************

// banner 轮播图
;(function ($) {
    $(function () {
        var iNow = 0;
        var $ul = $('#banner');
        var $ulList = $ul.find('li');
        var $ol = $('.line');
        $olList = $ol.find('li');
        changList(iNow);
        var timer = null;
        //启动定时器，轮播图播放
        timer = setInterval(function () {
            iNow++;
            iNow%=6;
            changList(iNow);
            changCurrent(iNow);
        },2000);
        //ul绑定鼠标移入移出启动和关闭定时器
        $ul.hover(function () {
            clearInterval(timer);
        },function () {
            timer = setInterval(function () {
                iNow++;
                iNow%=6;
                changList(iNow);
                changCurrent(iNow);
            },2000);
        });
        function changList(index) {
            $ulList.eq(index).fadeIn().siblings().fadeOut();
        } // 改变图片的显示和隐藏
        function changCurrent(index) {
            $olList.eq(index).addClass('current').siblings().removeClass('current');
        } //改变下标的显示
        $olList.on('click',function () {
            iNow = $(this).index();
            changList(iNow);
            changCurrent(iNow);
        }) //绑定ol的点击事件

        //移入注册窗口时切换文字
        var  $abtn = $('.abtn');
        $abtn.hover(function () {
            $(this).html('注册就送128元红包');
        },function () {
            $(this).html('立即注册');
        })
    });
})(jQuery);
// total 累计总数
;(function ($) {
    $(function () {
        //定时器修改平台运行时间
        setInterval(function () {
            var signInTime = new Date(2011, 5, 3, 12,30,34,23);
            var nowTime = new Date();
            var difference = nowTime-signInTime;
            var days = Math.floor(difference/(24*3600*1000));
            var year = parseInt(days/365);
            var day = days%365;
            if(day<10)day = '0'+day;
            var leave1 = difference%(24*3600*1000);   //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1/(3600*1000));
            if(hours<10)hours = '0'+hours;
            var leave2 = leave1%(3600*1000)  ;      //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2/(60*1000));
            if(minutes<10)minutes = '0'+minutes;
            //计算相差秒数
            var leave3=leave2%(60*1000); //计算分钟数后剩余的毫秒数
            var seconds=Math.round(leave3/1000);
            if(seconds<10)seconds = '0'+seconds;
            //<span id="year1">6</span>年<span id="day1">32</span>天<span id="hour1">03</span>时<span id="min1">23</span>分<spanid="sec1">34</span>秒
            $('#year1').html(year);
            $('#day1').html(day);
            $('#hour1').html(hours);
            $('#min1').html(minutes);
            $('#sec1').html(seconds);
        },1000);
    })
})(jQuery);
//honour 荣誉区域
;(function ($) {
    $(function () {
        //荣耀区域 鼠标移入时过渡效果
        var $list = $('.honour li');
        $list.hover(function () {
            $(this).css('top','-20px');
        },function () {
            $(this).css('top','5px');
        })
    })
})(jQuery);
