"use strict";
//getElementById = serve para pegar elementos que tem no Dom baseado no id
//querySelector = pegar qualquer objeto

const distancia = document.getElementById('distancia');
const QTDpedagios = document.getElementById('pedagios');
const calcular = document.getElementById('calcular');
const pedagio = document.getElementById('pedagio');
const total = document.getElementById('total');


function calculaPedagio(){
    const valorPedagio = 9.40;
    const resultado = Number (QTDpedagios.value)* valorPedagio;
    pedagio.innerText = resultado.toFixed(2);
   
    const valorKM = 6.00;
    const valorTotal = Number (distancia.value) * valorKM + resultado;
    total.innerText = valorTotal.toFixed(2);
}

calcular.addEventListener('click',calculaPedagio);

