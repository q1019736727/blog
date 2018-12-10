
let codeDom  = document.querySelector('#code')
let style  = document.querySelector('#style')


let result = `/* 
 * 大家好，我是ChiuYung
 * 只用文字作做自我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
    *{
         transition: all 1s;   
    }
    body{
        background-color: #dae8f4;
        color: #f8f8f1;
    }
    #code{
         padding:15px;
    }
  /* 我需要一点代码高亮 */
    .token.selector{
        color: #690;
    }
    .token.comment{
        color: #3b3f41;
    }
    .token.property{
        color: #905;
    }
 /* 现在我加点动画特效 */
    #code{
       height:100%;
       width:50%;
       border: 1px solid gray;
       transform:rotateZ(360deg);
    }


`

let n = 0
var timer = setInterval(function () {
    codeDom.innerHTML =
    codeDom.innerHTML = Prism.highlight(result.substring(0,n), Prism.languages.css)
    style.innerHTML = result.substring(0,n)
    codeDom.scrollTop = codeDom.scrollHeight //自动滚动
    if (n >= result.length){
        window.clearInterval(timer)
    }
    n++
},30)