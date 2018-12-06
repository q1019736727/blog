
/*********这样会产生全局函数或则变量每个js文件都可以访问,这个是我们不希望看到的********/
var paramOne = 10
let paramTwo = 20
window.paramcy = 30
/*******************/

//所有我们可以用一个匿名函数产生局部作用域，让别的文件不能访问我们的变量
!function() {
    var partValue = 300

    //但是我们在局部作用域中耶可以绑定一个全局函数(绑定在wind上),从而达到间接改变局部变量(也就是闭包)

    window.ReduceValue = function() {
        partValue -= 1
        return partValue
    }


}.call()
