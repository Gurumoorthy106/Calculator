const display = document.getElementById('display');
function appendToDisplay(input){
    this.input=input;
    display.value += input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}
function clearlastvalue(){
    display.value = display.value.slice(0, -1);
}
function cleardisplay(){
    display.value="";
}