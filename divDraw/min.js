
var canvas = document.getElementById('canvas')
var flag = false

canvas.onmousedown = function () {
    flag = true
    var X = ele.clientX
    var Y = ele.clientY
    let point = creatEle('div', { 'className': 'point' })
    point.style = 'left:' + X + 'px;' + 'top:' + Y + 'px;'
    canvas.appendChild(point)

}
canvas.onmousemove = function (ele) {
    if (flag === true) {
        var X = ele.clientX
        var Y = ele.clientY
        let point = creatEle('div', { 'className': 'point' })
        point.style = 'left:' + X + 'px;' + 'top:' + Y + 'px;'
        canvas.appendChild(point)
    }
}

canvas.onmouseup = function () {
    flag = false
}

function creatEle(eleClass, attr) {
    let ele = document.createElement(eleClass)
    for (const key in attr) {
        ele[key] = attr[key]
    }
    return ele
}