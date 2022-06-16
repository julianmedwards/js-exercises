'use strict'

var input = 12345

function reverseNumber(num) {
    var numStr = num.toString()
    var output = []

    for (let i = numStr.length - 1; i > -1; i--) {
        output.push(numStr[i])
    }

    output = output.join('')
    return Number(output)
}

var answer = reverseNumber(input)

console.log(answer)
let answerEl = document.createElement('p')
answerEl.innerHTML = '12345 reversed: ' + answer
answers.append(answerEl)
