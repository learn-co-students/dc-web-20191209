// let myFunc = function(num1, num2) {
//     if (num1 > num2) {
//         alert("Num 1 is bigger")
//     } else {
//         alert("Num 2 is bigger")
//     }
// }

// let testFunc = function() {
//     debugger
//     let num1 = 5
//     let num2 = 7
//     myFunc(num1, num2)
// }

// testFunc()

// let sayHello = function(name, greeting="hi") {
//     alert(`Hello ${name}`)
//     console.log(greeting)
// }

// sayHello("JC")

// let arr = [1, 2, 3]
// debugger

function addTwo(y) {
    let z = y
    z += 2
    return z
}

let a = 4
let b = addTwo(a)

console.log(`a: ${a}`)
console.log(`b: ${b}`)

function addTwo(y) {
    debugger
    let z = y
    z.num = z.num +  2
    return z
}

let a = {num: 4}
let b = addTwo(a)
debugger
console.log(`a: ${a}`)
console.log(`b: ${b}`)