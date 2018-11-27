

$('.wind>.images>img:nth-child(1)').addClass('enter').siblings().addClass('stac')

var n = 1

setInterval(()=>{
    leave($(`.wind>.images>img:nth-child(${calculate(n)})`))
        .one('transitionend',(ele)=>{//这儿主要不要一直执行，因为一执行完就会stac,只需要执行一次
            stac($(ele.currentTarget))
        })
    enter($(`.wind>.images>img:nth-child(${calculate(n+1)})`))
    n++
},5000)

function leave($ele) {
    $ele.removeClass('enter stac').addClass('leave')
    return $ele
}

function stac($ele) {
    $ele.removeClass('leave enter').addClass('stac')
    return $ele
}

function enter($ele) {
    $ele.removeClass('stac leave pop').addClass('enter')
    return $ele
}

function calculate(n){
        n = n%4
        if (n===0){
            n =4
        }
    return n
}

