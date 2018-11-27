

$('.wind>.images>img:nth-child(1)').addClass('enter').siblings().addClass('stac')

var n = 1

setInterval(()=>{
    leave($(`.wind>.images>img:nth-child(${calculate(n)})`))
        .one('transitionend',(ele)=>{
            stac($(ele.currentTarget))
        })
    enter($(`.wind>.images>img:nth-child(${calculate(n+1)})`))
    n++
},3000)

function leave($ele) {
    $ele.removeClass('enter').addClass('leave')
    return $ele
}

function stac($ele) {
    $ele.removeClass('leave').addClass('stac')
    return $ele
}

function enter($ele) {
    $ele.removeClass('stac').addClass('enter')
    return $ele
}

function calculate(n){
        n = n%4
        if (n===0){
            n =4
        }
    return n
}
