

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/
//:::::::::::: THIS WAS THE "+ - * %" PART , Now let focus on the Numbers :::::::::/

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/
// We chose the "const" for fixed values
const display = document.getElementById("display");
//Values to input
function appendToDisplay(input){
    display.value += input;
}

// Its time to clear our screen
function clearDisplay (){
    display.value = ""
}
// Thanks to @BroCode Videos, it helped me alot.
function calculate(){
    try {
         display.value = eval(display.value);
    }
     catch(error){
         display.value = "Error"
     }
}
    