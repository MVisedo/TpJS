//1)Introduccion a JavaScript
//Ejercicio 1.2
/*
let a = 3
let b = 4
let c = a+b
console.log('La suma de a y b es: '+c)

//Ejercicio 1.3
let nombre = prompt('¿Cual es tu nombre?')
console.log('Hola, '+nombre)

//2)Operadores lógicos y condicionales
//Ejercicio 2.1
let num1 = 5
let num2 = 8
let num3 = 2

if((num1>num2) && (num1>num3)){

console.log('El mayor de los tres numeros es: '+num1)

}else if(num2>num3){

  console.log('El mayor de los tres numeros es: '+num2)

}else{

  console.log('El mayor de los tres numeros es: '+num3)

}

//Ejercicio 2.2
let num = prompt('Ingresa un numero y te dire si es par o impar')
num%2 == 0 ? console.log('El numero '+num+' es par'):console.log('El numero '+num+' es impar')


//3)Operadores de asignacion y bucles
//Ejercicio 3.1
let iteraciones = 10

while(iteraciones > 0){
  console.log(iteraciones)
  iteraciones--
}


//Ejercicio 3.2
let mayor100 
do{
  mayor100 = prompt('Ingrese un numero mayor a 100')
  

}while(mayor100 <= 100)

console.log('Ingresaste un numero mayor a 100: '+mayor100)


//4)Funciones de JavaScript
//Ejercicio 4.1
function esPar(num){
  return num%2==0
}
console.log('El numero 8 es par: '+esPar(8))
console.log('El numero 7 es par: '+esPar(7))

//Ejercicio 4.2
function convertirCelsiusAFahrenheit(celsius){
  return celsius*1.8+32
}
console.log('30°C son equivalentes a '+convertirCelsiusAFahrenheit(30)+'°F')
console.log('20°C son equivalentes a '+convertirCelsiusAFahrenheit(20)+'°F')


//5)Objetos en JavaScript
//Ejercicio 5.1

let persona = {
  nombre: 'Matias',
  edad: 21,
  ciudad: 'Mendoza',
  cambioCiudad: function(nuevaCiudad){this.ciudad = nuevaCiudad}
}
persona.cambioCiudad('Paris')
console.log('Persona:',persona.nombre+', Edad:',persona.edad+', Ciudad:',persona.ciudad)

//Ejercicio 5.2
console.log(new Date().getFullYear() )
let libro = {
  titulo: 'Don Quijote',
  autor: 'Cervantes',
  año: 1605,
  esAntiguo: function(){return (new Date().getFullYear() - this.año)>10}
}
console.log('El libro "'+libro.titulo+'" de '+libro.autor+' es antiguo: '+libro.esAntiguo())

//6)Arrays
//Ejercicio 6.1
let array = [1,2,3,4,5,6,7,8,9,10]
let arrayX2 =[]
for (let index = 0; index < array.length; index++) {
  arrayX2[index] = array[index]*2
  
}
console.log('Arreglo original: '+array)
console.log('Arreglo multiplicado por dos: '+arrayX2)

//Ejercicio 6.2
let pares = []
for (let index = 0; index < 20; index++) {
  if(index%2==0){
  pares[pares.length] =  index
  }
}
console.log('Primeros 10 numeros pares: '+pares)
*/

//7)Introduccion al DOM
//Ejercicio 7.1
const cambiarColor = document.getElementById("buttonColor")

cambiarColor.addEventListener("click",()=>{
  const parrafos = document.getElementsByTagName("p")

  for (let index = 0; index < parrafos.length; index++) {
    if(parrafos[index].classList.contains("pblue")){
      parrafos[index].classList.remove("pblue")
      cambiarColor.textContent = 'Cambiar color a azul'
    }else{
      parrafos[index].classList.add("pblue")
      cambiarColor.textContent = 'Cambiar color a negro'
    }
  }
})

//Ejercicio 7.2
const mostrarAlerta = document.getElementById("buttonAlerta")
mostrarAlerta.addEventListener("click",()=>{
  const alerta = document.getElementById("inputMensaje").value
  alert(alerta)
  document.getElementById("inputMensaje").value = ''

})

//8)Eventos en DOM
//Ejercicio 8.1
const elemento1 = document.getElementById("E1")
const elemento2 = document.getElementById("E2")
const elemento3 = document.getElementById("E3")
const elemento4 = document.getElementById("E4")
elemento1.addEventListener("click",() =>{console.log(elemento1.textContent)})
elemento2.addEventListener("click",() =>{console.log(elemento2.textContent)})
elemento3.addEventListener("click",() =>{console.log(elemento3.textContent)})
elemento4.addEventListener("click",() =>{console.log(elemento4.textContent)})


//Ejercicio 8.2
const campo = document.getElementById("inputCampo")
const botonHab = document.getElementById("bHabilitar")
const botonDesHab = document.getElementById("bDeshabilitar")

botonDesHab.addEventListener("click",()=>{
  campo.disabled =true;
  
})
botonHab.addEventListener("click",()=>{
  campo.disabled = false;
})

//9)LocalStorage
//Ejercicio 9.1
const correoGuardado = document.getElementById("correoGuardado")
const botonGuardar = document.getElementById("bGuardar")
const botonEliminar = document.getElementById("bEliminar")
document.getElementById("inputCorreo").value =''
render();

botonGuardar.addEventListener("click",()=>{
  const correo = document.getElementById("inputCorreo").value
  localStorage.setItem("datos",JSON.stringify(correo))
  render();
})


botonEliminar.addEventListener("click",()=>{
  localStorage.removeItem("datos")
  render()
})


//Esta funcio muestra el parrafo y el boton de eliminar correo solo cuando hay un correo guardado
function render(){
  const emailGuardado = localStorage.getItem("datos");
if(emailGuardado){
  const pCorreo = document.getElementById("pCorreo")
  pCorreo.textContent = "Correo guardado: "+emailGuardado
  correoGuardado.style.visibility = "visible";
}else{
  correoGuardado.style.visibility = "hidden";
}
}

