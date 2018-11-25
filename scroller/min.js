
var buttons = $('.window>div>span')
let banner = $('.window>.bannerWrapper')[0]
var index = 0
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click',function(){
        index = $(this).index()
        scroller()
    })
}

function scroller() {
    scrollerW = index*(-300)
    $(banner).css({
        'transform' : 'translateX('+scrollerW+'px)'
    })
}