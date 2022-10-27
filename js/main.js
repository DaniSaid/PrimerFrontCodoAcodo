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
const valorTotal = document.getElementById("total");
const select = document.getElementById("categorias");
const cantidad = document.getElementById("cantidad");
let num = 0
let valorBruto = valorTicket;

/*al hacer click en el boton de resumen que tiene el id="btnResumen" se ejecuta la funcion totalAPagar*/
btnResumen.addEventListener("click", totalAPagar);

/*obtiene la categoria seleccionada en el formulario*/
function categoria(){ 
    let option = select.options[select.selectedIndex]; 
    return option.value;
}

/*calcula el valor bruto de la compra segun la cantidad de tickets ingresada*/
function totalBruto(){
    if( cantidad.value == null){
        valorBruto = 0;
    }else{
        valorBruto = valorTicket * cantidad.value;
    }
}

/*devuelve el valor neto de la compra tomando en cuenta los descuentos por categoria*/
function totalAPagar(){
    totalBruto();
    if( categoria() == 0 || valorBruto == 0){
        valorTotal.textContent = valorBruto;
    }else{
        if(categoria() !=2 && categoria() !=3)
        {   
            valorTotal.textContent =  valorBruto - descEstudiante;
            console.log("la categoria Estudiante fue seleccionada");
        }
        if(categoria() != 1 && categoria() != 3){
            valorTotal.textContent =  valorBruto - descTrainee;
            console.log("la categoria Trainee fue seleccionada");
        }
        if(categoria() != 1 && categoria() != 2){
            valorTotal.textContent =  valorBruto - descJunior;
            console.log("la categoria Junior fue seleccionada");       
        }
    }
}

