'use strict'

var input = 'A 24 week coding bootcamp is making me nerd out!'

function findLongestWord(string) {
    let strArr = string.split(' ')
    let longest = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > strArr[longest].length) {
            longest = i
        }
    }
    return strArr[longest]
}

let answer = findLongestWord(input)

console.log(answer)

var answerEl = document.createElement('p')
answerEl.innerHTML = 'Longest word in "' + input + '": ' + answer
answers.append(answerEl)
