// making function

function sayHello(name,age) {
    console.log('Hello', name, 'Im', age); // console object의 함수인 것임.
    console.log('Hello'+name+"Im"+age); // space not included
    console.log(`Hello ${name} you are ${age} years old`) // 신기
    return `Hello ${name} you are ${age} years old`;
}

const greetSomeone = sayHello("Jeongwon",15);

console.log(greetSomeone);

// Loot at console.log

 const calculator = {
     plus: function(a,b) {
         return a+b;
     }
 }

 const plus = calculator.plus(5,5);
 console.log(plus);
