// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    if (isNaN(newWithDrawAmount)) {
        alert('Please provide a valid number!');
        return;
    }
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4

    // // step-5
    // const balanceTotalElement = document.getElementById(' balance-total');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // // step-6
    // const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    // balanceTotalElement.innerText = newBalanceTotal;

    // get the balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithDrawAmount > previousBalanceTotal) {
        alert('Baap er bank e etto taka nai!');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // calculate the current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})