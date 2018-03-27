 $(function() {
	


 

  //轮播图JS
  //先复制第一个li，让入到ul的最后
    var tag = $('.box ul li:first').clone();
    $('.box ul').append(tag);
    //让所有的ul下li和窗口的宽度一致
    var w = $(window).width();
    $('.box ul li').width(w);
    //1.角标点击
    $('.box ol li').mouseenter(function(event) {
      $(this).addClass('current').siblings().removeClass('current');
      //left  0  0*100%
      //      1  1*100%
      //      2  2*100%
      var index = $(this).index();
      num=index;
      $('.box ul').stop().animate({left:-index*w}, 500);
    });
    //2.自动播放
    var timer=null;
    var num5=0;
    function autoPlay(){
      num5++;
       jieliu02 = true;
      //从第五张图播放，开始出现变化
      if(num5 > 4 ){
        //迅速的切换到第一张,没有动画
        $('.box ul').css({left:0});
        //下一张要播放1
        num5=1;
      }

      $('.box ul').stop().animate({left:-num5*w}, 500);
      $('.box ol li').eq(num5).addClass('current').siblings().removeClass('current');
      //如果编号为5的时候，让它的角标为0的显示
      if(num5 == 4){
        $('.box ol li').eq(0).addClass('current').siblings().removeClass('current');
      }


    }
    //点击向前 播放
    function prevPlay(){
      num5--;
      jieliu02 = true;
      if(num5 < 0){
        $('.box ul').css({left:-4*w});
        num5=3;
      }
      $('.box ul').stop().animate({left:-num5*w}, 500);
      $('.box ol li').eq(num5).addClass('current').siblings().removeClass('current');
      //如果编号为3的时候，让它的角标为0的显示
      if(num5 == 4){
        $('.box ol li').eq(0).addClass('current').siblings().removeClass('current');
      }
      
    }
    timer=setInterval(autoPlay, 3000);
    //鼠标经过 离开
    $('.box').mouseover(function(event) {
      clearInterval(timer);
    }).mouseout(function(event) {
      clearInterval(timer);
      timer=setInterval(autoPlay, 3000);
    });
    //3.左右点击
    //函数节流
   
    $('.box .right').click(function(event) {
        
            autoPlay();
          
    });
    $('.box .left').click(function(event) {
      
         prevPlay();
         
    });
    //4.当窗口大小调整的时候，执行的事件
    $(window).resize(function(event) {
      //alert('ok');
      //将窗口宽度重新获取，然后给每一个li
      w = $(window).width();
      $('.box ul li').width( w );
      //将改变之后w重新做动画；
      $('.box ul').stop().animate({left:-num5*w}, 500);
    });

//旋转木马
   

	//控制全包整装 一包到底JS
	$('.sep_box i').click(function(){
		$('.sep_box').fadeOut(300);
	});
	$('.yuyue_btn,.nin_pic_btn').click(function(){
		$('.sep_box').fadeIn(300);
	});


  (function(){
      var ind = 0; //初始位置
      var nav= $(".nav");
      var init = $(".nav .m").eq(ind);
      var block = $(".nav .block"); //滑块
      block.css({
        "left":init.position().left+20,
        "width":$(".nav li").width()}); //初始化滑块位置
      nav.hover(function(){},function(){ block.stop().animate({"left":init.position().left+20},300); }); //移出导航滑块返回

      $(".nav").slide({ 
          type:"menu", //效果类型
          titCell:".m", // 鼠标触发对象
          targetCell:".sub", // 效果对象，必须被titCell包含
          delayTime:300, // 效果时间
          triggerTime:0, //鼠标延迟触发时间
          returnDefault:true,//on返回初始位置
          defaultIndex:ind,//初始位置
          startFun:function(i,c,s,tit){ //控制当前滑块位置
            block.stop().animate({"left":tit.eq(i).position().left+20},300);
          }
        });
  })()

});
