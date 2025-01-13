const botones = document.querySelectorAll('.boton');
const operadores = document.querySelectorAll('.operador');


const labelTotal = document.querySelector('#resultado');
const labelOperacion = document.querySelector('#operacion');

let totalGlobal = null;

operadores.forEach((operador) => {
    operador.addEventListener('click', () => {
        if(operador.id === 'ce'){
            labelTotal.innerHTML = '0';
            labelOperacion.innerHTML = '';
        }else if(operador.id === 'c'){
            totalGlobal = labelOperacion.innerHTML.toString();
            labelOperacion.innerHTML = totalGlobal.substring(0, totalGlobal.length - 1);
        }else if(labelTotal.innerHTML != "" && operador.id === 'igual'){
            labelTotal.innerHTML = eval(labelOperacion.innerHTML);
        }else if(!(labelTotal.innerHTML != "") && operador.id === 'igual'){
            labelTotal.innerHTML = 'SYNTAX ERROR';
            setTimeout(() => {
                labelTotal.innerHTML = '';
            },2000);
        }
        else{
            labelOperacion.innerHTML += operador.innerHTML;
        }
    });
});


botones.forEach((boton) => {
    boton.addEventListener('click', () =>{
        labelOperacion.innerHTML += boton.innerHTML;
    });
});