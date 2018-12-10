
//https://happyjeannie.github.io/2018/06/14/%E5%9C%A8-ES5-%E4%B8%AD%E5%A6%82%E4%BD%95%E7%94%A8%E5%87%BD%E6%95%B0%E6%A8%A1%E6%8B%9F%E4%B8%80%E4%B8%AA%E7%B1%BB%EF%BC%9F/

function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = {
    sayName : function(){
        return this.name;
    }
}

var person1 = new Person('summer','12','doctor');
var person2 = new Person('sunny','22','writer');

person1.sayName();          //输出 'summer'
console.log(person2.sayName())  //输出 'sunny'

/*********************************************************/

const person = {
    isHuman: false,
    name: '方方',
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = "Matthew";
me.isHuman = true;

console.dir(me)
me.printIntroduction();

/*************************** 极简方法 ******************************/

var Animal = {
    createFn : function(){
        var animal = {};
        animal.name = 'animal';
        animal.eat = function(){
            alert('吃饭饭')
        }
        return animal;
    }
}
var Dog = {
    createFn : function(){
        var dog = Animal.createFn();
        dog.name = "柯基";
        dog.makeSound = function(){
            alert('汪汪汪')
        }
        return dog;
    }
}
var dog1 = Dog.createFn();
// dog1.eat();

/***************************  原型链继承  ******************************/

function Parent(){
    this.name = 'parent'
    this.sayHi = function () {
        console.log('Hi')
    }
}
function Child(){
    this.age = 20;
}
Child.prototype = new Parent();     // Child 继承 parent ，通过原型，形成链条

let test = new Child();
console.log(test.name);     // parent
console.log(test.age);    //   20  得到被继承的属性

function Brother(){
    this.weight = 55;
}

Brother.prototype = new Child();
var borther = new Brother();

// alert(borther.name);        // parent
// alert(borther.age);         //20
borther.sayHi()


/***************************  Promise  ******************************/

let sub = function (num1,num2) {
    return new Promise(function (resolve, reject) {
        if (typeof num1 !== 'number' && typeof num2 !== 'number') {
            reject('请传入两个整数型数据')
        }
        resolve(num1+num2)
    })
}
sub(3,5).then((total)=>{
    console.log(total) //8
},(error)=>{
    console.log(error) //请传入两个整数型数据
})


