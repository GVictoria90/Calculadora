"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let botonesOp = document.getElementsByClassName("operacion");
  let igual = document.getElementById("igual");
  let borrar = document.getElementById("borrar");
  // Resultados
  let anterior = document.getElementById("anterior");
  let resultado = document.getElementById("resultado");


  for (let boton of botonesOp) {
    boton.addEventListener("click", agregarOperador);
  }

  borrar.addEventListener("click", borrarUltimo);

  igual.addEventListener("click", calcular);

  function agregarOperador(event) {
    event.preventDefault();
    let valor = event.target.getAttribute("data-value");
    resultado.innerText += valor;
  }

  function borrarUltimo(event) {
    event.preventDefault();
    let res = resultado.innerText.slice(0, -1);
    resultado.innerText = res;
  }

  function calcular(event) {
    event.preventDefault();
    let res = resultado.innerText.replace(/x/g, '*');
    res = eval(res);
    anterior.innerText = resultado.innerText + "=" + res;
    resultado.innerText = "";
  }
});
