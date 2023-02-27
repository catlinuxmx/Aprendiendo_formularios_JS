export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    }else{
        input.parentElement.classList.add("input-container--invalid");
    }
}

const mensajesDeError = {
    
}

const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 anios de edad";
    }


    input.setCustomValidity(mensaje);
}
//Verificar si tiene mas de 18 anios

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, //Se suma 18 anios a la fecha de nacimiento para checar si la fecha actual y la fecha con la suma cumplen con el requisito de ser mayor a 18 anios
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}