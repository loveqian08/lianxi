/*window.onload = function(){*/
//顶部代码	
$(function () {
  
      function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};

      uaredirect("http://m.nczyzs.com");
      
      //效果图	
      /* $('.xiaoguo-hd').mouseover(function(){

      			$(this).children('.footer-wenben').stop().animate({
      				bottom:0	
      			},500)
      		}).mouseout(function(){
      			$(this).children('.footer-wenben').stop().animate({
      				bottom:-30
      			})
      }); */
      	
       $('.tab-item li').bind({
          click:function(){
                
               $(this).addClass('current').siblings().removeClass('current');
              var index = $(this).index();
              $('.picwrap ul').eq(index).addClass('current').siblings().removeClass('current');
          },
          mouseover:function(){
              $(this).addClass('yangshi').siblings().removeClass('yangshi');
          },
          mouseout:function(){
              $(this).removeClass('yangshi');
          }

       });
       //锦旗焦点图
       	
       	  var myTop = 1;
            $('.mainbanner_list li').click(function(){
                 // alert('ok')
               if ($(this).attr('class') == undefined || $(this).attr('class') == ''){
                   
                   $(this).addClass('current').siblings().removeClass('current'); 
                   myTop++;
                   var num2 = 0;
                   var index = $(this).index();
                   if ( index > num ) { num2 = 1180 }else{ num2 = -1180 }  
                   $('.mainbanner_window li').eq(index).css({
                          zIndex: myTop,
                          left: num2

                   }).animate({ left:0 },500);

                   num = index; 
                  
              }  
            }); 
            var num = 0;
            var timer = null;
            //启动定时器
           timer = setInterval(autoPlay,3000);     
            function autoPlay(){
                num++;
                myTop++;
                if ( num>2 ) { num=0 }
                $('.mainbanner_window li').eq(num).css({zIndex:myTop}).hide().fadeIn(300);
                $('.mainbanner_list li').eq(num).addClass('current').siblings().removeClass('current');
           }
            function prePlay(){
                num--;
                myTop++;
                if ( num<0 ) { num=2 }
                $('.mainbanner_window li').eq(num).css({zIndex:myTop}).hide().fadeIn(300);
                $('.mainbanner_list li ').eq(num).addClass('current').siblings().removeClass('current');
           }
          
          //设置鼠标进入停止定时器
          $('.mainbanner').mouseover(function(){
              clearInterval(timer);
          }).mouseout(function(){
              clearInterval(timer);
              timer = setInterval(autoPlay,3000);
          }); 


      //团装小区焦点图               
         var tag = $('.bd ul li').clone();

       $('.bd ul').append(tag);
       var allWidth = $('.bd ul li').length*$('.bd ul li').outerWidth(true);

       $('.xiaodian li').click(function(){
                 
          var bianhao = $(this).index();
          
          $(this).addClass('on').siblings().removeClass('on');
         /* $('.picScroll-left .bd ul').animate({left:-295*bianhao},500)*/
         $('.picScroll-left .bd ul').animate({left:-295*bianhao},800);
         bianhao = num4;
       });
        var timer = null;
          var num4 = 0;
         /* timer = setInterval(tuanzhuang,4000);*/
         
              function tuanzhuang(){
                num4++;
                if (num4>5) {
                   
                   $('.picScroll-left .bd ul').css({
                       left:0
                   });
                   num4=1;

                }
                $('.picScroll-left .hd ul li').eq(num4).addClass('on').siblings().removeClass('on');
                $('.picScroll-left .bd ul').animate({left:-295*num4},800);

                if (num4==5) {
                  $('.picScroll-left .hd ul li').eq(0).addClass('on').siblings().removeClass('on');

                }
            };
       

      //走进志远板块代码     
      //鼠标进入停止动画
      $('.picScroll-left .bd ').mouseover(function(){
          clearInterval(timer);

      }).mouseout(function(){
          clearInterval(timer);
          timer=setInterval(tuanzhuang,4000);

      });                    

      var number = 0;
      //点击左边箭头向左做动画
      //设置鼠标进入显示箭头
      $('.zhiyuan-box ul li').mouseover(function(){
        $(this).children('.zuojiantou,.youjiantou').show(); 
      }).mouseout(function(){
        $(this).children('.zuojiantou,.youjiantou').hide(); 
      });
      $('.zkz').click(function(){

        number--; 
        if (number<0) {
            $('.zhiyuantxt-box ol').css({
               left:-3*284 
            });
            number = 2;
        }
        

          $('.zhiyuantxt-box ol').stop().animate({
            left:-284*number
          },500);
          $('.yuandian span').eq(number).addClass('on').siblings().removeClass('on');
          if (number==3) {
               $('.yuandian span').eq(0).addClass('on').siblings().removeClass('on');
          }

      }); 
     //点击右边箭头向左做动画
      $('.ykz').click(function(){

        number++; 
        if (number>3) {
             $('.zhiyuantxt-box ol').css({
                left:0
             },500);
              number =1;
        }

        $('.zhiyuantxt-box ol').stop().animate({
          left:-284*number
        },500);
        $('.yuandian span').eq(number).addClass('on').siblings().removeClass('on');
        if (number==3) {
             $('.yuandian span').eq(0).addClass('on').siblings().removeClass('on');
        }
      });
      //鼠标进入圆点切换类并做动画
      $('.yuandian span').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $('.zhiyuantxt-box ol').stop().animate({left:-284*index},500);  
      });

      //精品案例JS代码
      $('.xiaodian li').mouseover(function(){
    var index = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.pic-one ol').stop().animate({
      left:-index*445
    },500);

    num01 = index;
  });
  var num01 = 0;
  var timer = null;

  

  function next_auto(){
    num01++;
    if ( num01 > 3  ) {
      
      $('.pic-one ol').css({left:0});
      num01 =1;
    };
    $('.xiaodian li').eq(num01).addClass('current').siblings().removeClass('current');
    $('.pic-one ol').stop().animate({
      left:-num01*445
    },500);

    if (num01==3) {
      $('.xiaodian li').eq(0).addClass('current').siblings().removeClass('current');
    }
  };

  function prev_auto(){
    num01--;
    if ( num01 < 0  ) {
      
      $('.pic-one ol').css({
        left:-3*445
      });
      num01 = 2 ;
    }
    $('.xiaodian li').eq(num01).addClass('current').siblings().removeClass('current');
    $('.pic-one ol').stop().animate({
      left:-num01*445
    },500);

    if ( num01==3 ) {
      $('.xiaodian li').eq(0).addClass('current').siblings().removeClass('current');
    }
  };

  timer = setInterval(next_auto,3000);
    //鼠标进入停止动画
    $('.pic-one').mouseover(function(){

      $('.Left_arrow,.Right_arrow').show();
      clearInterval(timer); 
    }).mouseout(function(){

       $('.Left_arrow,.Right_arrow').hide();
      clearInterval(timer);
      timer = setInterval(next_auto,3000);
    });
    //点击左边箭头图片向左切换
    $('.Left_arrow').click(function(){
      prev_auto();
    });
    $('.Right_arrow').click(function(){
      next_auto();
    });

    //699套餐页面点击预约出现提交表单
    $('.tc-baoming03,.yuyaku ').click(function(){

        $('.tc-biaodan').fadeIn(300)
    });
    $('.tc-guanbi').click(function(){

        $('.tc-biaodan').hide();
    });

    /*所有页面报价弹框出来JS*/
    setTimeout(function (argument) {
        
      $('#tc_bg').fadeIn(300);
         
    },6000);
 /*点击侧边栏的获取报价弹出计算器JS*/ 
   $('.baojia').click(function (argument) {
    
      $('#tc_bg').fadeIn(300);
      
    });
 /*所有页面红包登录框出现JS*/
    $('.xianjin').click(function (argument) {
      $('.packets-wrap').show();
      $('.mask-box').show();
    });
    $('.closeBtn').click(function (argument) {
      
      $('.packets-wrap').hide();
      $('.mask-box').hide();
    });

    //get current time
            function getNowFormDate() 
            {
              var date = new Date();
              var seperator1 = "-";
              var seperator2 = ":";
              var year = date.getFullYear();
              var month = date.getMonth() + 1;
              var strDate = date.getDate();
              if (month >= 1 && month <= 9) {
                month = "0" + month;
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
              }
              var currentdate = year + seperator1 + month + seperator1 + strDate
                  + " " + date.getHours() + seperator2 + date.getMinutes()
                  + seperator2 + date.getSeconds();
              return currentdate;
            }

            var Times = getNowFormDate(); 
            //ajax提交表单   
            function ajax_mianfei(){
                
                var xingming=document.getElementById("xingming");
                var tel=document.getElementById("tel");
               
                
                //定义变量接收上面表单每项的值和几个dede隐藏的input的值
                var dataString = 'xingming='+ xingming.value + '&tel=' + tel.value + '&updatatime=' + Times +'&action=post'+ '&diyid=7&do=2&dede_fields=xingming,textchar;tel,textchar;updatatime,textchar';

                if (xingming.value==" ") {
                  alert("请输入您的姓名");
                  return false;
                };
                if (tel.value==" " || tel.value.length  != 11) {
                  alert("请输入正确的手机号码");
                  return false
                };
                $.ajax({
                    type: "POST",
                    url: "/plus/diy_ajax.php", //提交到后台文件
                    data: dataString, //传值
                    success: function(data) {

                        alert(data);//成功打印PHP返回的值
                    
                    }
                });
                return false;

            }

           //侧边栏滚动代码
           function qiehuan(obj,img,pic){

                $(obj).mouseover(function(){
                  $(this).children().children().attr('src',img);
                  // $('.zaixian').attr('src','images/Slider1.png')
                  $(this).css({
                    'color':'#fff',
                    'background':'#ee0027'
                  })  
                  // alert("ok")  
                }).mouseout(function(){
                  // $(this).children().children().('src',pic);
                    $(this).css({
                    'color':'#666',
                    'background':'#fff'
                  })
                   $(this).children().children().attr('src',pic);
                  
                }); 
              }
              qiehuan(".zixun","/images/Slider11.png","/images/Slider1.png");
              qiehuan(".baojia","/images/Slider22.png","/images/Slider2.png");
              qiehuan(".xianjin","/images/hongbao2.png","/images/hongbao.png");
              qiehuan(".backUp","/images/Slider33.png","/images/Slider3.png");
               //控制侧边栏滚动代码
                   var winHeight = $(window).height();
            $(window).scroll(function(){
                        var winHeight = $(window).height();
                        var scrollHeigth = $(window).scrollTop();
                        $('.sider').stop().animate({
                            top:scrollHeigth + winHeight/2 -60
                        },400);
                        //点击箭头返回顶部  
                        $('.backUp').click(function(){
                  $('html,body').stop().animate({scrollTop: 0},800);
                  
                });             
           });

 });

         






