/**
 * 弹窗
 */
var dialog = {  
  init:function(data){
    if(data=='focuson'){//关注后
      $("body").append('<div class="dialog-box"><div class="dialog_bg"><div class="alert-cont"><div class="close-ico close-btn"></div><div class="dialog_header">您的抽奖次数已用完</div>'+
      '<div class="dialog_conter"><div class="btn_award">想要增加抽奖次数—— <br>1、关注“海峡教育报”微信公众号，可获得一次抽奖机会；<br> 2、分享此条H5至朋友圈，可获得一次抽奖机会；<br> </div></div></div></div></div>');
    }else if(data=='comeag'){//明天再来
      $("body").append('<div class="dialog-box"><div class="dialog_bg"><div class="alert-cont"><div class="close-ico close-btn"></div><div class="dialog_header" style="height: 1rem;"></div><div class="dialog_conter"><div class="btn_award pfaward">今日抽奖次数已用完，明天再来哦！<img class="imges" src="images/dg.png"></div></div></div></div></div>');
    }      
    $(".dialog-box .close-btn").click(function(){
      dialog.removediv()
    });      
  },
  removediv:function(){
   $(".dialog-box").remove()
  }
}



//相关的 DOM
//<div class="loading"><div class="progress" id="progress"><div class="progress-bar progress-bar-success" style="width: 0%;"></div></div></div>

var list = [
  {//0
    content: '<div class="lg-page">'+
    '<div class="lg-trailer" style="animation-duration:1.47s;animation-iteration-count:1;animation-delay:.5s;left:37%;bottom: 17rem;"><img src="images/logo.png" style="width: 6rem;" class="lg-component-img"></div>' +
    '<div class="lg-trailer" style="top: 17rem;left: 0;width: 100%;"><div class="loading"><div class="progress" id="progress"><div class="progress-bar progress-bar-success" style="width: 0%;"></div></div></div></div>'+
    
'</div>',
transition:{name:'card',direction:-1}
},
{//0
  content: '<div class="lg-page">'+
                '<div class="lg-trailer bounceIn" style="animation-duration: 1.47s; animation-iteration-count: 1;"><img src="images/logo.png" style="width: 5rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="totle slideInDown" style="animation-delay:.1s;animation-duration: 1s; animation-iteration-count: 1; ">做有情怀的教育专业媒体</div>'+
                '<div class="lg-trailer zoomIn" style="animation-delay:.1s;animation-iteration-count:1;animation-duration: 1.47s; left: 4rem;bottom: 0rem"><img src="images/wan.png" style="width: 9rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceInDown" style="animation-duration:1.47s;animation-iteration-count:1;animation-delay:.5s;left: .5rem;bottom: 3rem"><img src="images/xcl.png" style="width: 2rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceInUp" style="animation-duration:1.47s;animation-iteration-count:1;animation-delay:.5s;right: .5rem;bottom: 3rem"><img src="images/klr.png" style="width: 2rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer fadeInUp animated" style="left: 180px;width: 40px;height: 28px;bottom: 28px;animation-duration: 1s;animation-delay: 1.52s;animation-iteration-count: infinite;animation-direction: normal;"><img src="images/dxs.jpg" class="lg-component-img" style="width:100%"></div>'+
            '</div>',
  transition:{name:'card',direction:-1}
  }, {//1
    content: '<div class="lg-page">'+
                '<div class="lg-trailer bounceIn" style="animation-duration: 1.47s; animation-iteration-count: 1;transform: rotate(381deg);"><img src="images/jl.png" style="width: 3rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceIn" style="animation-duration: 1.47s; animation-iteration-count: 1;top:4rem;left:14rem"><img src="images/jl.png" style="width: 2rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceIn" style="animation-duration: 1.47s; animation-iteration-count: 1;top:4rem;left:2rem"><img src="images/jl.png" style="width: 11rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer tada removekeepd instructions" style="animation-duration: 1.47s; animation-iteration-count: infinite;top:11rem;left:8rem;"><img src="images/2_ts.png" style="width: 8rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceIn" style="animation-duration: 1.47s; animation-iteration-count: 1;bottom:2rem;left:4rem;transform: rotate(733deg);"><img src="images/jl.png" style="width: 2rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer bounceIn removekeepd btn ss">抽奖</div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
            '</div>',
    transition:{name:'card',direction:1},
  }, {//2 说明
    content: '<div class="lg-page">'+
                '<div class="removekeepd setupscroll">'+
                  '<div class="instru"><h3><i></i>活动时间</h3><p>2018年2月9日-2018年2月11日</p></div>'+
                  '<div class="instru" style="padding-right: 1rem;"><h3><i></i>活动规则</h3><p>每个用户每天可抽奖三次，关注“海峡教育报”微信公众号或转发此条H5至朋友圈，可再各获得一次抽奖机会。</p><div style="text-align: center;padding-top: .8rem;margin-left: -2rem;"><img src="images/qrcode.png"></div></div>'+
                  '<div class="instru"><h3><i></i>活动奖品</h3><p>1、999元新春现金大奖<br>2、1G手机流量包<br>3、500M手机流量包<br>4、《海峡教育报·冲刺中考模拟试卷集》<br>5、“海峡教育报·童真之眼”台历<br>6、贺岁小红包（1元、3元、5元现金）</p><div style="border-top:1px solid #a6764a;border-bottom:1px solid #a6764a;text-align: center;padding: .8rem 0;margin: 1rem 1rem 1rem -1rem;"><img src="images/cdu.jpg" style="margin-right: 1rem;width: 6rem;"><img src="images/rlse.jpg" style="width: 6rem;"></div></div>'+
                  '<div class="instru" style="margin-left: 1rem;padding-right: 1rem;"><p>抽取到《海峡教育报·冲刺中考模拟试卷集》和“海峡教育报·童真之眼”台历的用户，请真实填写手机号和详细地址，其中台历于3月初寄出、试卷集将于5月初寄出。</p></div>'+
                  '<div class="instru" style="margin-left: 0;"><p style="font-size: .7rem;text-align: center;color:#332314">海峡教育报社在法律允许范围内保留最终解释权</p></div>'+
                  '<div><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
                  '<div class="black">返回</div>'+
                '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//3 500M 
    content:'<div class="lg-page">'+
              '<div class="removekeepd setupscroll">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:19rem;z-index: 9;"><img src="images/4_ts.png" style="width: 9rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="left: 5rem;bottom:9rem;"><img src="images/pho.png" style="width: 12rem;margin: 1rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer removekeepd" style="left: 4rem;bottom:6rem;;width: 75%;"><div class="lebs">手机号</div><input class="linput" type="tel"></div>'+
                '<div class="lg-trailer removekeepd btn" style="top:inherit;bottom: 1rem;">领取</div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
              '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//4 海峡教育报 
    content:'<div class="lg-page">'+
              '<div class="removekeepd setupscroll">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:19rem;z-index: 9;"><img src="images/3_ts.png" style="width: 11rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 13rem;text-align: center;">'+
                '<img src="images/cdu3.jpg" style="width: 4.5rem;transform: rotate(335deg);" class="lg-component-img">'+
                '<img src="images/cdu2.jpg" style="width: 4.5rem;margin: -.8rem 0 0 -.6rem;;z-index: 2;position: relative;" class="lg-component-img">'+
                '<img src="images/cdu.jpg" style="width: 4.5rem;margin: -.2rem 0 0 -.5rem;transform: rotate(380deg);position: relative;z-index: 3;" class="lg-component-img"></div>'+
                '<div class="lg-trailer removekeepd" style="left: 3rem;bottom:5rem;;width: 75%;">'+
                  '<div><div class="lebs">手机号</div><input class="linput" type="tel"></div>'+
                  '<div><div class="lebs">地址</div><input class="linput" type="text"></div>'+
                  '<div><div class="lebs">收件人</div><input class="linput" type="text"></div>'+
                '</div>'+
                '<div class="lg-trailer removekeepd btn" style="top:inherit;bottom: 1rem;">领取</div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
              '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//5 海峡教育报台历
    content:'<div class="lg-page">'+
              '<div class="removekeepd setupscroll">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:20.5rem;z-index: 9;"><img src="images/5_ts.png" style="width: 10rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 12rem;text-align: center;">'+
                '<img src="images/rlse.jpg" style="width: 7rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer removekeepd" style="left: 3rem;bottom:5rem;;width: 75%;">'+
                  '<div><div class="lebs">手机号</div><input class="linput" type="tel"></div>'+
                  '<div><div class="lebs">地址</div><input class="linput" type="text"></div>'+
                  '<div><div class="lebs">收件人</div><input class="linput" type="text"></div>'+
                '</div>'+
                '<div class="lg-trailer removekeepd btn" style="top:inherit;bottom: 1rem;">领取</div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
              '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//6 1元红包
    content:'<div class="lg-page">'+
              '<div class="removekeepd setupscroll">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:19rem;z-index: 9;"><img src="images/1y.png" style="width: 10rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 8rem;text-align: center;">'+
                  '<img src="images/hbao.jpg" style="width: 9rem;" class="lg-component-img"><p style="color: #92633f;font-size: .6rem;margin-top: .4rem;">小红包已转至您的零钱，请查收！</p></div>'+
                '<div class="lg-trailer removekeepd btn aa" style="top:inherit;bottom: 1rem;line-height: 1rem;"><div style="margin-top:.6rem;font-size:.8rem">再抽<br>一次</div></div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
              '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//7 3元红包
    content:'<div class="lg-page">'+
              '<div class="removekeepd setupscroll">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:19rem;z-index: 9;"><img src="images/3y.png" style="width: 10rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 8rem;text-align: center;">'+
                  '<img src="images/hbao.jpg" style="width: 9rem;" class="lg-component-img"><p style="color: #92633f;font-size: .6rem;margin-top: .4rem;">小红包已转至您的零钱，请查收！</p></div>'+
                '<div class="lg-trailer removekeepd btn" style="top:inherit;bottom: 1rem;line-height: 1rem;"><div style="margin-top:.6rem;font-size:.8rem">再抽<br>一次</div></div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
              '</div>'+
            '</div>',
    transition:{direction:0}
  },
  {//8 5元红包
    content:'<div class="lg-page">'+
                '<div class="lg-trailer" style="background: #c81814;width: 100%;height: 1rem;"></div>'+
                '<div class="lg-trailer" style="left: 4.5rem;bottom:19rem;z-index: 9;"><img src="images/5y.png" style="width: 10rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 8rem;text-align: center;">'+
                  '<img src="images/hbao.jpg" style="width: 9rem;" class="lg-component-img"><p style="color: #92633f;font-size: .6rem;margin-top: .4rem;">小红包已转至您的零钱，请查收！</p></div>'+
                '<div class="lg-trailer removekeepd btn" style="top:inherit;bottom: 1rem;line-height: 1rem;"><div style="margin-top:.6rem;font-size:.8rem">再抽<br>一次</div></div>'+
                '<div class="lg-trailer" style="bottom:0;"><img src="images/footer.png" style="width: 100%;" class="lg-component-img"></div>'+
            '</div>',
    transition:{direction:0}
  },
  {//9 未中奖页面
    content:'<div class="lg-page">'+
                '<div style="width:6rem;background:#c81814;height:3rem;margin:0 auto;"></div>'+
                '<div style="position: absolute;top: 5rem;width:100%;font-size: 14px;text-align: center;">很遗憾！您未抽中。再来一次，奖品就在路上哦。</div>'+
                '<div class="lg-trailer" style="left: 7rem;bottom:11rem;z-index: 9;"><div style="width:1.5rem;color:#952420;float:left;font-size:1rem;">海峡教育报祝您</div><div style="border-left:1px solid #939598;display:inline-block;padding: 1rem 0 0 .6rem;"><img src="images/xcdj.png" style="width: 3rem;" class="lg-component-img"></div></div>'+
                '<div class="lg-trailer" style="width:100%;bottom: 1rem;text-align: center;">'+                
                  '<img src="images/dg.png" style="width: 8rem;" class="lg-component-img"></div>'+
                '<div class="lg-trailer removekeepd btn" style="top: inherit;bottom: 1rem;line-height: 1rem;right: 1rem;position: absolute;left: inherit;"><div style="margin-top:.6rem;font-size:.8rem">再抽<br>一次</div></div>'+             
            '</div>',
    transition:{direction:0}
  }
]
var swiper = new Swiper({        
  container: document.querySelector('#outer-container'),
  data: list,
  keepDefaultClasses:['removekeepd']//保持默认响应的元素 class 的白名单
});
/**
 * 进度条
 */
(function () {
  var imgs = document.querySelectorAll("img"),
    imgs_len = imgs.length,
    loaded = 0;
  var Progres = function () { }
  Progres.prototype = {
    init: function (callback) {
      var that = this
      for (var i = 0; i < imgs_len; i++) {
        if (imgs[i].complete == true) {//图片已加载完成
          that.load_callback(callback);
        } else {
          imgs[i].onload = function () {//图片动态加载完成触发
            that.load_callback(callback);
          }
        }
      }
    },
    load_callback: function (callback) {
      loaded++;
      document.getElementsByClassName('progress-bar')[0].style.width = parseInt(loaded / imgs_len * 100) + "%"
      if (loaded === imgs_len) {
        callback({ loaded: true })
        return callback

      }
    }
  }
  window.Progres = Progres
})();

new Progres().init(function (res) {
  //res.loaded表示加载成功 
  if (res.loaded) {
    setTimeout(function () {
      swiper.swipeNext()
    }, 1000)
  }
});

/*点击抽奖按钮*/
$('.ss').click(function(){
  swiper.swipeTo(6); //跳转页面
  //dialog.init('focuson')//提示关注弹窗
  //dialog.init('comeag')//提示明天再来弹窗
})
$('.aa').click(function(){
  swiper.swipeTo(1); //跳转页面
  //dialog.init('focuson')//提示关注弹窗
  //dialog.init('comeag')//提示明天再来弹窗
})
/*活动规则*/
$('.instructions').click(function(){
  swiper.swipeTo(2,{name: 'rotate'});
})
$('.black').click(function(){
  swiper.swipeTo(1,{name: 'rotate'})
})


//音乐播放
var audio = document.getElementById('myaudio');
$('#bgm-btn').click(function(){
    if($(this).hasClass('active')){
        audio.play();
    }
    else{
        audio.pause();
    }
    $(this).toggleClass('active');
});
function audioAutoPlay(){ 
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
       audio.play();
    }, false);
}
audioAutoPlay();