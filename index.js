window.alert('Hello, Welcome to my Website!')

function somar(){

var num1 = window.document.getElementById("n1").value;
var num2 = window.document.getElementById("n2").value;


num1 = parseFloat(num1);
num2 = parseFloat(num2);

var resultado = num1 + num2;
document.getElementById("res").textContent = "RESULTADO: " + resultado;
}