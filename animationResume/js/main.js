
let result1 = `/* 
 * 大家好，我是ChiuYung
 * 只用文字作做自我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
    *{
         transition: all 1s;   
    }
 /*白色背景太单调了，我们加点样式吧*/
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
       border: 1px solid gray;
       transform:rotateZ(360deg);
    }
 /* 好了，玩够了，开始自我介绍吧 */
 /*首先我需要一张白纸*/
     #paper{
        width: 100%;
        padding: 15px;
        background: white;
        height: 100%;
        overflow: auto;
        font-size: 16px;
    }
  /*请看右边👉*/
`

let md = `
# 个人介绍

## 求职意向

高级前端开发工程师

## 技能

1.javascript

2.ReactNative

3.Vue

4.Node.JS


## 联系方式

邮箱: q1019736727@gmail.com

电话: 18282763548


## 个人经历

经历非常丰富

上过山

下过海

井冈山上放过牛

景阳冈上打过虎



`
let result2 = `
/* 接下来我们将简历转为html*/
/* 这里会专门用到一个框架 marked.js*/
`
let result3 = `
/* 接下来我们将简历转为html*/

/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
//书写css
function writeCss(preText,newText,fn) {
    let codeDom  = document.querySelector('#code')
    let style  = document.querySelector('#style')
    var n = 0
    var timer = setInterval(function () {
        codeDom.innerHTML = Prism.highlight(preText+newText.substring(0,n), Prism.languages.css)
        style.innerHTML = preText + newText.substring(0,n)
        codeDom.scrollTop = codeDom.scrollHeight //自动滚动
        if (n >= newText.length){
            window.clearInterval(timer)
            fn.call()
        }
        n++
    },30)
}
//创建paper
function creatPaper(fn) {
    let div = document.createElement('div')
    div.id = 'paperWrapper'
    document.body.appendChild(div)
    let paper = document.createElement('pre')
    paper.id = 'paper'
    div.appendChild(paper)
    fn.call()
}

//写markdown
function writeMarkDown(fn){
    let paper  = document.querySelector('#paper')
    var n = 0
    var timer = setInterval(function () {
        paper.innerHTML = md.substring(0,n)
        paper.scrollTop = paper.scrollHeight
        if (n >= md.length){
            window.clearInterval(timer)
            fn.call()
        }
        n++
    },30)
}
//markdown转html
function markdownTohtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paperWrapper > #paper')
    markdownContainer.replaceWith(div)
    fn.call()
}
writeCss('',result1,()=>{
    creatPaper(()=>{
        writeMarkDown(()=>{
            writeCss(result1,result2,()=>{
                markdownTohtml(()=>{
                    writeCss(result1+result2,result3)
                })
            })
        })
    })
})




