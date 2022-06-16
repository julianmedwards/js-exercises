'use strict'

var input = 'Andrew'

function alphabetize(string) {
    let strArr = string.split('').sort().join('')
    return strArr
}

let answer = alphabetize(input)

console.log(answer)
var answerEl = document.createElement('p')
answerEl.innerHTML = 'Input of ' + input + ' alphabetized: ' + answer
answers.append(answerEl)
