const textArea =  document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
//copia.style.display = "none";



function validarTexto(){
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if(!validador || validador === 0){
    alert("Solo son permitidas letras minúsculas y sin ecentos")
    location.reload();
    return true;
  }
}


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++ ) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptada;
}


function desencriptar(stringDesncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++ ) {
        if (stringDesncriptada.includes(matrizCodigo[i][1])) {
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }
    }
    return stringDesncriptada;
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado")
}

