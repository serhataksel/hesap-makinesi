let historyLog = [];

function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    const resultField = document.getElementById("result");
    const expression = resultField.value;
    try {
        let result = eval(expression);
        resultField.value = result;
        updateHistory(expression + ' = ' + result);
    } catch (error) {
        resultField.value = "Hata";
    }
}

function updateHistory(entry) {
    historyLog.push(entry);
    const historyField = document.getElementById("history");
    historyField.innerHTML = historyLog.join('<br>');
}
