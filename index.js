

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/
//:::::::::::: THIS WAS THE "+ - * %" PART , Now let focus on the Numbers :::::::::/

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
// Clear display by clicking AC button
function clearDisplay (){
    display.value = ""

}

//Backspace for the purpose of one item delete
function backSpace() {
    const current_value = document.getElementById("display").value;
    const new_value = current_value.slice(0, -1); // Remove the last character
    document.getElementById("display").value = new_value;
}

// if anything doesnt work then show Error
function calculate(){
    try {
         display.value = eval(display.value);
    }
     catch(error){
         display.value = "Error"
     }
}
    