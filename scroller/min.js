
var buttons = $('.window>div>span')

let banner = $('.window>.bannerWrapper')[0]

let wrapper = $('.window>.bannerWrapper')

var index = 0

var timer = autoScroller()


$('.window>.bannerWrapper').css({
    'width' : buttons.length*300+'px'
})

for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click',function(){
        index = $(this).index()
        selctIndex(index)
        scroller(index)
    })
}

function scroller(currentIndex) {
    scrollerW = currentIndex*(-300)
    $(banner).css({
        'transform' : 'translateX('+scrollerW+'px)'
    })
}


function autoScroller(){
    let time = setInterval(()=>{
        index++
        selctIndex(index%(buttons.length))
        scroller(index%(buttons.length))
    },2000)
    return time
}

function selctIndex(n){
    buttons.eq(n).addClass('red').siblings('.red').removeClass('red')
}

wrapper.on('mouseenter',()=>{
    window.clearInterval(timer)
})
wrapper.on('mouseleave',()=>{
    timer = autoScroller()
})
