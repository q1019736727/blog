var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var isClear = false //是否是清除

autoCanvasWH()

cheackDevice()

clearLine()

clear.onclick = function(){
    context.clearRect(0,0,canvas.width,canvas.height)
}


//检测设备是否具有触摸touch事件
function cheackDevice(){
    if(document.documentElement.ontouchstart === undefined){//pc端
        drawPCLine()
    }else{
        drawMobileLine()
    }
}

//PC描绘线条
function drawPCLine() {

    var isDown = false //是否按下去
    var frame = {
        x: undefined,
        y: undefined
    }

    document.onmousedown = function (ele) {
        isDown = true
        let X = ele.clientX
        let Y = ele.clientY
        frame = {
            x: X,
            y: Y
        }
    }

    document.onmousemove = function (ele) {
        if (isDown) {
            let X = ele.clientX
            let Y = ele.clientY
            if (isClear) {
                context.clearRect(X-25, Y-25, 50, 50)
            } else {
                context.beginPath()
                context.lineWidth = 3
                context.moveTo(X, Y)
                context.lineTo(frame.x, frame.y)
                context.stroke();
                frame = {
                    x: X,
                    y: Y
                }
            }
        }
    }

    document.onmouseup = function () {
        isDown = false
    }

}

//移动端描绘线条
function drawMobileLine() {

    var isDown = false //是否按下去
    var frame = {
        x: undefined,
        y: undefined
    }

    document.ontouchstart = function (ele) {
        isDown = true
        let X = ele.touches[0].clientX
        let Y = ele.touches[0].clientY
        frame = {
            x: X,
            y: Y
        }
    }

    document.ontouchmove = function (ele) {
        if (isDown) {
            let X = ele.touches[0].clientX
            let Y = ele.touches[0].clientY
            if (isClear) {
                context.clearRect(X-25, Y-25, 50, 50)
            } else {
                context.beginPath()
                context.lineWidth = 3
                context.moveTo(X, Y)
                context.lineTo(frame.x, frame.y)
                context.stroke();
                frame = {
                    x: X,
                    y: Y
                }
            }
        }
    }

    document.ontouchend = function () {
        isDown = false
    }
}


function clearLine() {
    let eraserButton = document.getElementById('eraser')
    eraserButton.onclick = function () {
        isClear = true
    }

    let penButton = document.getElementById('pen')
    penButton.onclick = function () {
        isClear = false
    }
}
//自动宽高
function autoCanvasWH() {
    var H = document.documentElement.clientHeight
    var W = document.documentElement.clientWidth
    canvas.width = W
    canvas.height = H

    window.onresize = function () {
        H = document.documentElement.clientHeight
        W = document.documentElement.clientWidth
        canvas.width = W
        canvas.height = H
    }
}
