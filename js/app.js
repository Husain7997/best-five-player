function selectePlayer(player) {
    const selectFile = document.getElementById(player).innerText;
    let selected = document.getElementById('selected');
    const li = document.createElement("li");
    li.innerText = selectFile;

    if (selected.childNodes.length <= 5) {
        selected.appendChild(li);
    }
    else { alert("You can add Mex 5 Player ") }

};
function disableButton(btn) {
    document.getElementById(btn).disabled = true;

}


const calculate = document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = document.getElementById('perPlayer');
    const perPlayerCostString = perPlayer.value;
    const perPlayerCostNum = parseInt(perPlayerCostString);

    const selectItem = document.getElementById('selected').childNodes.length;
    const selectItemlength = parseFloat(selectItem)
    console.log(selectItem);
    const playerExpensesMat = perPlayerCostNum * selectItemlength;
    let playerExpenses = document.getElementById('playerExpenses');
    playerExpenses.innerText = playerExpensesMat;
});


const calculateTotal = document.getElementById('calculateTotal').addEventListener('click', function () {
    const playerExpensesTotal = document.getElementById('playerExpenses').innerText;
    const expenses = parseFloat(playerExpensesTotal);
    const manager = document.getElementById('manager').value;
    const managerCost = parseFloat(manager);
    const coach = document.getElementById('coach').value;
    const coachCost = parseFloat(coach);
    const totalValue = expenses + managerCost + coachCost;

    const total = document.getElementById('total');
    total.innerText = totalValue;
});
