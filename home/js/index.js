/**
 * Created by Administrator on 2017/7/3.
 */
// 加载公共部分*************

$.ajax({
    url:'../public/template/header_template.html',
    success:function (data) {
        $('header').html(data);
        public_header();
    }
});//异步加载头部html片段，然后回调执行js
$.ajax({

    url:'../public/template/nav_template.html',
    success:function (data) {
        $('nav').html(data);
        public_nav();
    }
}); //异步加载导航菜单html片段，然后回调执行js
$.ajax({
    url:'../public/template/footer_template.html',
    async:true,
    success:function (data) {
        $('footer').html(data);
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
        //获取几个需要变化数值的元素 和 目标数值
        var $total = $('.total');
        var $element1 = $total.find('.dl1>dd>span').eq(1);
        var num1 = $element1.attr('data-val');
        var $element2 = $total.find('.dl1>dd>span').eq(2);
        var num2 = $element2.attr('data-val');

        var $element3 = $total.find('.dl2>dd>span').eq(1);
        var num3 = $element3.attr('data-val');
        var $element4 = $total.find('.dl2>dd>span').eq(2);
        var num4 = $element4.attr('data-val');

        var $element5 = $total.find('.dl4>dd>span');
        var num5 = $element5.attr('data-val');

        //分别调用变化数值的函数
        changNum(num1,$element1);
        changNum(num2,$element2);
        changNum(num3,$element3);
        changNum(num4,$element4);
        changNum(num5,$element5);

        //累计的数额从0 递增到 预定的值
        function changNum(targetNum,$element) {
            var timer = null;
            var htmlNum  = 0;
            var originNum = 0;
            var changTimes = 40;
            var time = 1000;
            var count = 0;
            var speed = parseInt((targetNum - originNum)/40);
            timer = setInterval(function () {
                count++;
                htmlNum+=speed;
                if(count==40){
                    clearInterval(timer);
                    htmlNum = targetNum;
                }
                $element.html(htmlNum);
               // console.log(targetNum);
            },time/changTimes);

        }
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

//产品item区域
(function ($) {
    //鼠标移入.list时，改变border-color
    $('.list').hover(function () {
       // alert(1);
        $(this).css('borderColor','#e2e2e2');
    },function () {
        $(this).css('borderColor','#fff');
    });

    //鼠标移入.able，
    $('.able').hover(function () {
        $(this).css({'color':'white','backgroundPosition':'0 -50px'})
    },function () {
        $(this).css({'color':'#ae7849','backgroundPosition':'0 0'})
    });

    //鼠标移入.alink moudle模块切换进来
    $('.alink').hover(function () {
        //获取当前移入的item
        var $item =  $(this).parents('.item');
        //module移入视觉区
        $item.find('.module').css('left','110px');
        //内容相应向右边移动
        $item.find('[class *= "-con"]').css('left','471px');
        //mask盖层移入
        $item.find('.mask').css('right','0');
        //alink的小人隐藏
        $item.find('.alink').css('backgroundPositionX','110px');
    },function () {
        var $item =  $(this).parents('.item');
        $item.find('.module').css('left','-251px');
        $item.find('[class *= "-con"]').css('left','110px');
        $item.find('.mask').css('right','-180px');
        $item.find('.alink').css('backgroundPositionX','39px');
    });
    //item4 债权项目表格移入改变背景颜色
    $('.debtList').hover(function () {
        //alert(1);
        $(this).css('backgroundColor','rgb(245,245,245)');
    },function () {
        $(this).css('backgroundColor','white');
    });
})(jQuery);

//新闻模块
(function ($) {
    $(function () {
        var iNow = 0;
        var timer = null;
        var newsBox = $('.news-box');
        newsBox.hover(function () {
            //放大图片
            $('#news img').css({'transform':'scale(1.1)','transformOrigin':'left top'});
            //显示左右箭头
            $('.arrow').show();

            //清除定时器
            clearInterval(timer);
        },function () {
            $('#news img').css({'transform':'scale(1)'});
            $('.arrow').hide();
            //重新启动定时器
            timer = setInterval(function () {
                iNow++;
                iNow%=6;
                changList(iNow);
            },2000);
        });
        //轮播
        timer = setInterval(function () {
            iNow++;
            iNow%=6;
            changList(iNow);
        },2000);
        function changList(index) {
            $('#news>li').eq(index).fadeIn().siblings().fadeOut();
        }
        //注册点击左右箭头的事件 --切换图片
        $('#arrow1').click(function () {
            iNow--;
            iNow%=6;
            changList(iNow);
        });
        $('#arrow2').click(function () {
            iNow++;
            iNow%=6;
            changList(iNow);
        });

    })
})(jQuery);

