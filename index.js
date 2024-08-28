const display = document.getElementById("display");

//Criando a função responsável pelos cálculos//
function appendToDisplay(input){
    display.value += input;
}

//Criando a função responsável por limpar os cálculos//
function clearDisplay(){
    display.value = "";
}

//Criando a função responsável por calcular e apresentar os resultados//
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERRO";
    }
    
}