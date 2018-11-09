var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var isClear = false //是否是清除

autoCanvasWH()

drawLine()

clearLine()

//描绘线条
function drawLine() {
    context.beginPath()
    context.lineWidth = 3

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
                context.clearRect(X, Y, 5, 5)
                context.restore()
            } else {
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

function clearLine() {
    let clearButton = document.getElementById('clear')
    clearButton.onclick = function () {
        isClear = true
    }

    let drawButton = document.getElementById('draw')
    drawButton.onclick = function () {
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