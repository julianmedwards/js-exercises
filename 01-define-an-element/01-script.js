'use strict'

// Define Number
var num = 1
// Define String
var str = 'foo'
// Define Boolean
var bool = true
// Define Array
var arr = ['el1', 'el2']
// Define Object Literal
var objLit = {persisentName: 'Object Name'}
// Define Constructor for an Object
var objectConstructor = function () {
    this.instanceName = 'Object Name'
}
// Define instance of an Object (could just be a generic Object class)
var objectInstance = new objectConstructor()
// Define variable for function
var funct = function funct() {
    // Use this function to write all the answers to the HTML page.
    var numEl = document.createElement('p')
    numEl.innerHTML = 'num = ' + num
    var strEl = document.createElement('p')
    strEl.innerHTML = 'str = ' + str
    var boolEl = document.createElement('p')
    boolEl.innerHTML = 'bool = ' + bool
    var arrEl = document.createElement('p')
    arrEl.innerHTML = 'arr = ' + arr

    answers.append(numEl)
    answers.append(strEl)
    answers.append(boolEl)
    answers.append(arrEl)

    var objLitEl = document.createElement('p')
    objLitEl.innerHTML = 'objLit = ' + objLit
    answers.append(objLitEl)

    var objConstrEl = document.createElement('p')
    objConstrEl.innerHTML = 'objConstructor = ' + objectConstructor
    answers.append(objConstrEl)

    var objInstEl = document.createElement('p')
    objInstEl.innerHTML = 'objInstance = ' + objectInstance
    answers.append(objInstEl)

    var funcEl = document.createElement('p')
    funcEl.innerHTML = funct
    answers.append(funcEl)
}

console.log('num = ' + num)
console.log('str = ' + str)
console.log('bool = ' + bool)
console.log('arr = ' + arr)
console.log('objLit = ')
console.dir(objLit)
console.log('objConstructor = ' + objectConstructor)
console.log('objectInstance = ')
console.dir(objectInstance)
console.log('function funct()')
console.dir(funct)

funct()
