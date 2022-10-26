/*
document.getElementById(id)

element.getElementsByTagName(name)

document.createElement(name)

document.querySelector()

parentNode.appendChild(node)

element.innerHTML

element.style.left

element.setAttribute

element.element.getAttribute

element.addEventListener

window.content

window.onload

window.dump

window.scrollTo
*/

const valorTicket = 200;
const descEstudiante = valorTicket * 0.8;
const descTrainee = valorTicket * 0.5;
const descJunior = valorTicket * 0.15;
let descuento = 0;
let total = 0;

function update(){
    let select = document.getElementById("categorias");
    let option = select.options[select.selectedIndex];    
    console.log("valor: " + option.text);
    return option.text;
}

function obtenerTotalAPagar(){
    switch(_categoria){
        case Estudiante:
            descuento = descEstudiante;
            total = valorTicket + descuento;
            console.log("el descuento es de: " + descuento);
            console.log("total a pagar: " + total);
        break

        case Trainee:
            descuento = descTrainee;
            total = valorTicket + descuento;
            console.log("el descuento es de: " + descuento);
            console.log("total a pagar: " + total);
        break
        
        case Junior:
            descuento = descJunior;
            total = valorTicket + descuento;
            console.log("el descuento es de: " + descuento);
            console.log("total a pagar: " + total);
        break
    }
}