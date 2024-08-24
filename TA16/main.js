const text = document.getElementById("input");
const lista = document.getElementById("lista");
const elemento = document.getElementById("ocultar");

document.getElementById("añadir").addEventListener("click", function () {
  if (text.value !== "") {
    const liAgregado = document.createElement("li");
    liAgregado.textContent = text.value; // Obtenemos el valor del input directamente
    lista.appendChild(liAgregado);       // Agregamos el nuevo <li> a la lista
    text.value = "";                     // Limpiamos el input
  }

});

document.getElementById("eliminar").addEventListener("click", function () {
  if (lista.lastElementChild) {               //Verifica si el elemento existe
    lista.removeChild(lista.lastElementChild) //Lo elimina
  }
});

document.getElementById("ocultar").addEventListener("click", function() {
  if(elemento.value == "Ocultar"){
    elemento.value = "Mostrar";
    lista.style.display = "none";
  }else{
    if(elemento.value == "Mostrar"){
      elemento.value = "Ocultar";
      lista.style.display = "block";
    }
  }
});