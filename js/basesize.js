!function(){
  var maxWidth=750;
  document.write('<style id="o2HtmlFontSize"></style>');
  var o2_resize=function(){
      var cw,ch;
      if(document&&document.documentElement){
          cw=document.documentElement.clientWidth,ch=document.documentElement.clientHeight;
      }
      if(!cw||!ch){
          if(window.localStorage["o2-cw"]&&window.localStorage["o2-ch"]){
              cw=parseInt(window.localStorage["o2-cw"]),ch=parseInt(window.localStorage["o2-ch"]);
          }else{
              chk_cw();//定时检查
              return ;//出错了
          }
      }
      var zoom=maxWidth&&maxWidth<cw?maxWidth/375:cw/375,zoomY=ch/603;//由ip6 weChat
      window.localStorage["o2-cw"]=cw,window.localStorage["o2-ch"]=ch;
      //zoom=Math.min(zoom,zoomY);//保证ip6 wechat的显示比率
      window.zoom=window.o2Zoom=zoom;
      document.getElementById("o2HtmlFontSize").innerHTML='html{font-size:'+(zoom*20)+'px;}.o2-zoom,.zoom{zoom:'+(zoom/2)+';}.o2-scale{-webkit-transform: scale('+zoom/2+'); transform: scale('+zoom/2+');} .sq_sns_pic_item,.sq_sns_picmod_erea_img{-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scale('+zoom/2+');transform: scale('+zoom/2+');}';
  },
  siv,
  chk_cw=function(){
      if(siv)return ;//已经存在
      siv=setInterval(function(){
          //定时检查
          document&&document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight&&(o2_resize(),clearInterval(siv),siv=undefined);
      },100);
  };
  o2_resize();//立即初始化
  window.addEventListener("resize",o2_resize);
}();