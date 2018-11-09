
var canvas = document.getElementById('canvas')

var flag = false

// canvas.onmousedown = function(ele){
//     var X = ele.clientX
//     var Y = ele.clientY
//     let point = creatEle('div',{'className':'point'})
//     point.style = 'left:'+X+'px;'+'top:'+Y+'px;'
//     canvas.appendChild(point)
// }
// canvas.onmousemove = function(ele){
//     var X = ele.clientX
//     var Y = ele.clientY
//     let point = creatEle('div',{'className':'point'})
//     point.style = 'left:'+X+'px;'+'top:'+Y+'px;'
//     canvas.appendChild(point)
// }

canvas.onmousedown = function(){
    flag = true
    if(flag === true){
        canvas.onmousemove = function(ele){
            var X = ele.clientX
            var Y = ele.clientY
            let point = creatEle('div',{'className':'point'})
            point.style = 'left:'+X+'px;'+'top:'+Y+'px;'
            canvas.appendChild(point)
        }
    }
}


canvas.onmouseleave = function () {
    console.log('抬起')
    flag = false
}

function creatEle(eleClass,attr) {
    let ele = document.createElement(eleClass)
    for (const key in attr) {
        ele[key] = attr[key]
    }
    return ele
}