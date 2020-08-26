$(document).ready(function(){

    /*Бургер меню*/
    $('.start__burger').on('click', function (){
        $('.start__burger,.start__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $("#scroll").on("click",function (){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

    /*Первый слайдер */
    let slideNow=1;
    let slideMax=$(".team__slider").children().length;
    let slideWidth=$(".team__window").innerWidth();
    function nextSlide(){
        slideNow+=1;
        if(slideNow>slideMax){
            slideNow=1;
        }
        $(".team__slider").css("transform",`translateX(-${slideWidth*(slideNow-1)}px)`);
        $(".team__labels ul li").removeClass("selected");
        $(`.team__labels ul li:nth-child(${slideNow})`).addClass("selected");
    }
    function moveSlide(step){
        slideNow+=step;
        slideWidth=$(".team__window").innerWidth();
        if(slideNow>slideMax){
            slideNow=1;
        }
        if(slideNow<1){
            slideNow=slideMax;
        }
        $(".team__slider").css("transform",`translateX(-${slideWidth*(slideNow-1)}px)`);
        $(".team__labels ul li").removeClass("selected");
        $(`.team__labels ul li:nth-child(${slideNow})`).addClass("selected");
    }

    var slide = setInterval(nextSlide,3000);

    $(window).resize(function () {
        slideWidth=$(".team__window").innerWidth();
        $(".team__slider").css("transform",`translateX(-${slideWidth*(slideNow-1)}px)`);


        /* feedbacks*/
        feedbackWidth=$(".feed-backs__window").innerWidth()
        $(".feed-backs__slider").css("transform",`translateX(-${feedbackWidth*(feedbackNow-1)}px)`);

        /*News*/
        maxheight=0;
        $(".news__slide").css("min-height",`0px`);
        for(let i=0,value;i<newsSlideMax;i++){
            value = $(`.news__slide:nth-child(${i+1})`).outerHeight();
            if(value>maxheight){
                maxheight=value;
            }
       }
       $(".news__window").css("height",`${maxheight}px`);
       $(".news__slide").css("min-height",`${maxheight}px`);
       $(".news__slider").css("transform",`translateY(-${maxheight*(newsNow-1)}px)`);

       /*Высота колонок  */
        maxHeightPrice =0;
        $(".price__column").css("min-height",`0px`);
        if($(window).width()<767){
            for(let i=0,value;i<priceColumnMax;i++){
                value = $(`.price__column:nth-child(${i+1})`).innerHeight();
                if(value > maxHeightPrice){
                    maxHeightPrice=value;
            }
        }
        $(".price__column").css("min-height",`${maxHeightPrice}px`);

        $('.start__burger,.start__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });

    $(".team__window").hover(function (){
         clearInterval(slide)
    },function (){
         slide = setInterval(nextSlide,3000);
    });

    $("#left").on('click',function (){
        moveSlide(-1);
    });

    $("#right").on('click',function (){
        moveSlide(1);
    });

    $(".team__labels ul li").on('click', function () {
        let index=$(this).index()+1;
        slideNow=index;
        $(".team__slider").css("transform",`translateX(-${slideWidth*(slideNow-1)}px)`);
        $(".team__labels ul li").removeClass("selected");
        $(`.team__labels ul li:nth-child(${slideNow})`).addClass("selected");
        
    });

    /*feed-backs*/
    let feedbackNow=1;
    let feedbackMax=$(".feed-backs__slider").children().length;
    let feedbackWidth=$(".feed-backs__window").innerWidth();

    function nextfeedback(){
        feedbackNow+=1;
        if(feedbackNow>feedbackMax){
            feedbackNow=1;
        }
        $(".feed-backs__slider").css("transform",`translateX(-${feedbackWidth*(feedbackNow-1)}px)`);
        $(".feed-backs__links ul li").removeClass("selected");
        $(`.feed-backs__links ul li:nth-child(${feedbackNow})`).addClass("selected");
    }
   let feedback=setInterval(nextfeedback,3000);


   $(".feed-backs__wrapper").hover(function (){
        clearInterval(feedback);   
   }, function (){
        feedback=setInterval(nextfeedback,3000);
   })

   $(".feed-backs__links ul li").on('click',function (){
        feedbackNow=$(this).index()+1;
        $(".feed-backs__slider").css("transform",`translateX(-${feedbackWidth*(feedbackNow-1)}px)`);
        $(".feed-backs__links ul li").removeClass("selected");
        $(`.feed-backs__links ul li:nth-child(${feedbackNow})`).addClass("selected");
   })

   /*Одинаковая высота колонок */
   let newsSlideMax= $(".news__slider").children().length;
   let newsNow=1;
   let maxheight = 0;

   function nextNews(){
        newsNow+=1;
        if(newsNow>newsSlideMax){
            newsNow=1;
        }
        $(".news__slider").css("transform",`translateY(-${maxheight*(newsNow-1)}px)`);
        $(".news__slide-link ul li").removeClass("selected-white");
        $(`.news__slide-link ul li:nth-child(${newsNow})`).addClass("selected-white");
   }

   for(let i=0,value;i<newsSlideMax;i++){
        value = $(`.news__slide:nth-child(${i+1})`).outerHeight();
        if(value>maxheight){
            maxheight=value;
        }
   }
   $(".news__window").css("height",`${maxheight}px`);
   $(".news__slide").css("min-height",`${maxheight}px`);
   let news=setInterval(nextNews,3000);

   $(".news__window-wrapper").hover(function (){
        clearInterval(news);
   },function (){
        news=setInterval(nextNews,3000);
   })

   $(".news__slide-link ul li").on('click',function (){
       newsNow = $(this).index() + 1;
       $(".news__slider").css("transform",`translateY(-${maxheight*(newsNow-1)}px)`);
       $(".news__slide-link ul li").removeClass("selected-white");
       $(`.news__slide-link ul li:nth-child(${newsNow})`).addClass("selected-white");
   })

   /* Высота колонок прайса*/
   let priceColumnMax = $(".price__row").children().length;
   let maxHeightPrice =0;
   if($(window).width() < 767){
        for(let i=0,value;i<priceColumnMax;i++){
            value = $(`.price__column:nth-child(${i+1})`).innerHeight();
            if(value > maxHeightPrice){
                maxHeightPrice=value;
            }
        }
        $(".price__column").css("min-height",`${maxHeightPrice}px`)
    }

})