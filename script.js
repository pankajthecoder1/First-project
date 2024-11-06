let displayvalue='';
function appendNumber(number){
    displayvalue+=number;
    updateDisplay();
}
function appendOperator(operator){
    displayvalue+=operator;
    updateDisplay();
}
function clearDisplay(){
    displayvalue='';
    updateDisplay();

}
function calculateResult(){
    try{
    displayvalue=eval(displayvalue).toString();
    updateDisplay();
    }catch(error){
        displayvalue='Error';
        updateDisplay();
    }
}
function updateDisplay(){
    document.getElementById('display').value=displayvalue;
}