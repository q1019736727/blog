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


