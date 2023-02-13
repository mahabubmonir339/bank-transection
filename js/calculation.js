document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-email');
    const depositInput = parseFloat(depositField.value);

    // deposit output 
    const depositValue = document.getElementById('deposit-value');
    const depositInner = parseFloat(depositValue.innerText);
    const totalDeposit = depositInput + depositInner;
    depositValue.innerText = totalDeposit;

    // empty button 
    depositField.value = '';
    // balance output 
    let balanceField = document.getElementById('balance-output');
    let balanceValue = parseFloat(balanceField.innerText);
    const totalBalance = balanceValue + depositInput;
    balanceField.innerText = totalBalance;
});

document.getElementById('withdraw-submit').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-email');
    const withdrawValueChange = withdrawInput.value;
    const withdrawButtonValue = parseFloat(withdrawValueChange);
    // withdraw output 
    let withdrawOutput = document.getElementById('withdraw-output');
    const withdrawValue = parseFloat(withdrawOutput.innerText);
    const totalWithdraw = withdrawButtonValue + withdrawValue;
    withdrawOutput.innerText = totalWithdraw;
    withdrawInput.value = '';
    //  balance calculation 
    let balanceEquation = document.getElementById('balance-output');
    const balancePerseFloat = balanceEquation.innerText;
    let balanceParseFloat = parseFloat(balancePerseFloat);
    const totalBalanceFinal = balanceParseFloat - withdrawButtonValue;
    balanceEquation.innerText = totalBalanceFinal;
});