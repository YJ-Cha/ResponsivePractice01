$('.allBtn').click(function(){
    $('nav').animate({left:0})
});

$('nav button').click(function(){
    $('nav').animate({left: '-100%'})
});

//nav에 스크립트가 적용된게 있으면 화면이 resize될때 없애준다
$(window).resize(function(){
    $('nav').removeAttr('style');
});