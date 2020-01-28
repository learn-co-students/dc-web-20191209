function sayHey(name) {
    console.log(`Hey ${name}`)
}

function executeThis(x) {
    // x is a callback function
    x("Skyler")
    console.log("Hi Anna")
}


let startArray = [1, 2, 3]

function myMap(arr, passedFunction) {
    // create new empty array
    let answer = []
    // iterate over arr 
    for (let i=0; i<arr.length; i++) {
    // go through each element and apply passed function to each 
        let currentElement = arr[i]
        debugger
        let newElement = passedFunction(currentElement) 
        // push result into new array
        answer.push(newElement)
    }
    return answer
}

// myMap(startArray, some function) 
// some function applied to every element of orig array. returning new array


function timesTwo(x) {
    return x * 2
}

function plusFive(x) {
    return x + 5
}

// build myFilter; takes an argument and a callback function
// returns newArray with only matching elements

// function greaterThanFive(x) {
//     return x > 5
// }
let startingArray = [4, 5, 6, 7]
// myFilter(startingArray, greaterThanFive) 
// [6, 7]

function myFilter(arr, func) {
    let answer = []
    for (let i=0; i<arr.length; i++) {
        let currentElement = arr[i]
        if (func(currentElement)) {
            answer.push(currentElement)
        }
    }
    return answer
}

myFilter(startingArray, x => x > 5)
