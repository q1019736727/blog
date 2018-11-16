var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var drawColor = 'black'
var lineWidth = 1
var isClear = false //是否是清除

autoCanvasWH()

cheackDevice()

buttonClickActions()

//按钮点击事件
function buttonClickActions() {  
    pen.onclick = function () { 
        isClear = false 
        pen.classList.add('activity')
        eraser.classList.remove('activity')
    }
    
    eraser.onclick = function(){
        isClear = true
        eraser.classList.add('activity')
        pen.classList.remove('activity')
    }
    
    clear.onclick = function(ele){
        isClear = true
        context.clearRect(0,0,canvas.width,canvas.height)
        pen.classList.remove('activity')
        eraser.classList.remove('activity')
    }
    download.onclick = function () {
        isClear = true
        pen.classList.remove('activity')
        eraser.classList.remove('activity')
        //储存图片
        let dataUrl = canvas.toDataURL('image/png')
        let a = document.createElement('a')
        a.href = dataUrl;
        a.download = "我的图片";
        a.click()
        
    }

    black.onclick = function(){
        drawColor = 'black'
        black.classList.add('colorPick')
        red.classList.remove('colorPick')
        green.classList.remove('colorPick')
        blue.classList.remove('colorPick')
    }
    red.onclick = function(){
        drawColor = 'red'
        black.classList.remove('colorPick')
        red.classList.add('colorPick')
        green.classList.remove('colorPick')
        blue.classList.remove('colorPick')
    }
    green.onclick = function(){
        drawColor = 'green'
        black.classList.remove('colorPick')
        red.classList.remove('colorPick')
        green.classList.add('colorPick')
        blue.classList.remove('colorPick')
    }
    blue.onclick = function(){
        drawColor = 'blue'
        black.classList.remove('colorPick')
        red.classList.remove('colorPick')
        green.classList.remove('colorPick')
        blue.classList.add('colorPick')
    }

    oneFont.onclick = function(){
        oneFont.classList.add('fontActivity')
        twoFont.classList.remove('fontActivity')
        threeFont.classList.remove('fontActivity')
        lineWidth = 1;
    }
    twoFont.onclick = function(){
        twoFont.classList.add('fontActivity')
        oneFont.classList.remove('fontActivity')
        threeFont.classList.remove('fontActivity')
        lineWidth = 3;
    }
    threeFont.onclick = function(){
        twoFont.classList.remove('fontActivity')
        oneFont.classList.remove('fontActivity')
        threeFont.classList.add('fontActivity')    
        lineWidth = 5;    
    }
    
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
                context.clearRect(X-5, Y-5, 10, 10)
            } else {
                context.beginPath()
                context.strokeStyle = drawColor;
                context.lineWidth = lineWidth
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
                context.clearRect(X-5, Y-5, 10, 10)
            } else {
                context.beginPath()
                context.strokeStyle = drawColor;
                context.lineWidth = lineWidth
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
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}
