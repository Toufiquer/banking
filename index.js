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
    let resultBalance = addNum('#balance-value', inputValue)
    if (isNaN(resultBalance)) {
        alert('Please Input A Valid Number')
    } else if (inputValue < 0) {
        alert('Please Input A Positive Number')
    } else {
        printID('#deposit-value', resultDeposit)
        printID('#balance-value', resultBalance)
    }
})
document.querySelector('#withdraw-button').addEventListener('click', function () {
    debugger
    let withdrawValue = inputToNum('#input-withdraw')
    let resultWithdraw = addNum('#withdraw-value', withdrawValue)
    let resultBalance = addNum('#balance-value', -withdrawValue)
    if (isNaN(resultBalance)) {
        alert('Please Input A Valid Number')
    } else if (withdrawValue < 0) {
        alert('Please Input A Positive Number')
    } else if (resultBalance > 0) {
        printID('#withdraw-value', resultWithdraw)
        printID('#balance-value', resultBalance)
    } else {
        alert('Please Deposit First')
    }
})