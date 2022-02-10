function inputToNum(ID) {
    let textValue = document.querySelector(ID).value
    let textNum = parseFloat(textValue)
    document.querySelector(ID).value = ''
    return textNum
}
function idToNum(ID) {
    let textValue = document.querySelector(ID).innerText
    let textNum = parseFloat(textValue)
    return textNum
}
function printID(ID, varDisplay) {
    let textValue = document.querySelector(ID)
    textValue.innerText = varDisplay
}
function addNum(ID, newNum) {
    let idNum = idToNum(ID)
    return idNum + newNum
}
document.querySelector('#deposit-button').addEventListener('click', function () {
    let inputValue = inputToNum('#input-deposit')
    let resultDeposit = addNum('#deposit-value', inputValue)
    printID('#deposit-value', resultDeposit)
    let resultBalance = addNum('#balance-value', inputValue)
    printID('#balance-value', resultBalance)
})
document.querySelector('#withdraw-button').addEventListener('click', function () {
    let withdrawValue = inputToNum('#input-withdraw')
    let resultWithdraw = addNum('#withdraw-value', withdrawValue)
    printID('#withdraw-value', resultWithdraw)
    let resultBalance = addNum('#balance-value', -withdrawValue)
    printID('#balance-value', resultBalance)
})