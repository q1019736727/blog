
var imgs = $('.wind>.images>img')

// $('.wind>.images>img:nth-child(1)').addClass('enter').siblings().addClass('stac')

var n = 1

setInterval(()=>{
    n = n%3
    if (n === 0){
        n = 3
    }
    enter($(`.wind>.images>img:nth-child(${n})`))
        .one('transitionend',(ele)=>{
            leave($(ele.currentTarget))
        })
    stac($(`.wind>.images>img:nth-child(${n+1})`))
    n++
},3000)

function enter($ele) {
    $ele.removeClass('leave stac').addClass('enter')
    return $ele
}

function leave($ele) {
    $ele.removeClass('enter stac').addClass('leave')
    return $ele
}

function stac($ele) {
    $ele.removeClass('enter leave').addClass('stac')
    return $ele
}
