'use strict'

let myTriangle = {
    sideA: 5,
    sideB: 6,
    sideC: 7,
}

// Find the area of a triangle using Heron's Formula.
function heronsFormula(triangle) {
    let a = triangle.sideA
    let b = triangle.sideB
    let c = triangle.sideC
    let p = (a + b + c) / 2

    let num = p * (p - a) * (p - b) * (p - c)
    let area = Math.sqrt(num)
    return area
}

var area = heronsFormula(myTriangle)

let answerStr = 'Area of a Triangle with sides of 5, 6, and 7: ' + area

console.log(answerStr)
var answer = document.createElement('p')
answer.innerHTML = answerStr
answers.append(answerStr)
