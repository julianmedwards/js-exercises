'use strict'

var inputWhole = 46
var inputDecimel = 0.46

// Expects whole number of cents.
function convertToChangeWhole(amount) {
    let change = []
    while (amount > 0) {
        let denominations = [25, 10, 5, 1]
        for (let denom of denominations) {
            for (let coins = Math.trunc(amount / denom); coins >= 1; coins--) {
                change.push(denom)
                amount -= denom
            }
        }
    }
    return change
}
// Expects decimel number.
// Returns an array where each element is the quantity of each
// denomination, equaling to the given amount in the fewest total coins.
// Descending order, the 4 common US denominations.
// (quarters, dimes, nickels, pennies)
function convertToChangeDenomCount(amount) {
    let change = []
    while (amount > 0) {
        let denominations = [0.25, 0.1, 0.05, 0.01]
        for (let denom of denominations) {
            let coins = amount / denom
            if (coins >= 1) {
                coins = Math.trunc(coins)
                change.push(coins)
            } else {
                change.push(0)
                continue
            }
            amount -= coins * denom
            amount = amount.toFixed(2)
        }
    }
    return change
}

let answerWhole = convertToChangeWhole(inputWhole)
let answerDenom = convertToChangeDenomCount(inputDecimel)

console.log(answerWhole)
console.log(answerDenom)

var answerElWhole = document.createElement('p')
answerElWhole.innerHTML =
    'Convert ' + inputWhole + ' cents to coins: ' + answerWhole
answers.append(answerElWhole)

var answerElDenom = document.createElement('p')
answerElDenom.innerHTML =
    'Alternate conversion, ' +
    inputDecimel +
    ' dollars to number of coins: ' +
    answerDenom[0] +
    ' quarters, ' +
    answerDenom[1] +
    ' dimes, ' +
    answerDenom[2] +
    ' nickles, ' +
    answerDenom[3] +
    ' pennies.'
answers.append(answerElDenom)
