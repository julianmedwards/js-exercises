'use strict'

var input = 'javascript is my favorite language'

function upperAll(string) {
    let strArr = string.split(' ')
    strArr.forEach(function (word, index) {
        let newWord = word.split('')
        newWord[0] = newWord[0].toUpperCase()
        strArr[index] = newWord.join('')
    })

    return strArr.join(' ')
}

let answer = upperAll(input)

console.log(answer)

let answerEl = document.createElement('p')
answerEl.innerHTML = 'Uppercased sentence "' + input + '": ' + answer
answers.append(answerEl)
