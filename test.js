let arr = ['a', 'b', 'c']
//**************************************//
//系统方法函数
arr.forEach(function (x, y) {
    console.log(x, y)
})

console.log('\n\n\n')

//**************************************//
//自己构造一个函数方法（第一种）

let colArr = ['xxx', 'yyy', 'zzz']

function Each(array, fn) {
    for (let key in array) {
        fn(key, array[key])
    }
}

Each(colArr, function (x, y) {
    console.log(x, y)
})

console.log('\n\n\n')

//**************************************//
//自己构造一个函数方法（第二种）

let testArr = ['Tom', 'Bob', 'Jack']
testArr.Each = function (fn) {
    for (let key in this) {
        fn(key, this[key])
    }
}

testArr.Each(function (key, value) {
    console.log(key, value)
})


//students 按分数的高低从大到小排列
var students = ['小明','小红','小花']
var scores = { 小明: 59, 小红: 99, 小花: 80 }
students.sort(function(x,y){
    return scores[y]-scores[x]
})
console.log(students)

// [4,16,36,64] 得到下面的结果
var a = [1,2,3,4,5,6,7,8,9]
let resulta = a.filter(function(x){
    return x%2 === 0
}).map(function (y) {
    return y*y
})
console.log(resulta)

//计算所有奇数的和
var dd = [1,2,3,4,5,6,7,8,9]
let resultb = dd.reduce(function(sum,n){
    if(n%2 === 1){
        return sum+n
    }else{
        return sum
    }
},0)
console.log(resultb)

console.log('\n\n\n')

//作用域
var cc = 1
function cf() {
    var cc = 2//这儿写了var就是新声明的
    //cc = 4 //这儿如果没写var,就代表最上面的cc
    console.log(cc)
    cf2()
    function cf2() {
        var cc =3
        console.log(cc)
    }
}
cf.call()
console.log(cc)


console.log('\n\n\n')


var testFunc = function(){
    console.log(arguments)
}
testFunc.call(undefined,[123,134,123])


