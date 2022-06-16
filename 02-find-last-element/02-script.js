'use strict'

var items1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
var items2 = 'A really long string'
var items3 = [
    [1, 2, 3],
    ['one', 'two'],
    [true, false, true],
]

var answer1 = 'items1: ' + items1[items1.length - 1]
var answer2 = 'items2: ' + items2[items2.length - 1]
var answer3 = 'items3: ' + items3[items3.length - 1]
var answer4 = 'Last array of items3: ' + items3[items3.length - 1].pop()

console.log(answer1)
console.log(answer2)
console.log(answer3)
console.log(answer4)

var items1El = document.createElement('p')
items1El.innerHTML = answer1
var items2El = document.createElement('p')
items2El.innerHTML = answer2
var items3El = document.createElement('p')
items3El.innerHTML = answer3
var items3SecondEl = document.createElement('p')
items3SecondEl.innerHTML = answer4

answers.append(items1El, items2El, items3El, items3SecondEl)
