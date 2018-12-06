
//访问JsOne.js文件的变量
console.log(window.paramOne,paramTwo,window.paramcy)//这里可以访问全局作用域

// console.log(partValue)//报错 partValue is not defined(所以JsOne.js的局部变量partValue不能被访问到)


let value = ReduceValue()
console.log(value)//299
