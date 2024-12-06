function alerta(){
    alert("Bienvenido");
}
function cambiarTexto(){
    document.getElementById("holaMundo").innerText = "Gris";
}

function cambiarClase(){
    document.getElementById("verde").className = "colorAmarillo";
}
function envirarFormulario(e){
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    let peso = document.getElementById("inputPeso").value;
    alert(
        `Informacion enviada
        nombre: ${nombre}
        peso: ${peso}
        `

    );
}
