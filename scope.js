//Scope o ambito
//las variables declaradas con var tiene un scope de función
//las varibales declaradas con let o const tienen un scope de bloque

function saludar() {
  var nombre = "paul";
  console.log("hola " + nombre);
}

saludar()
console.log(nombre);

function comer() {
  var fruta = 'banana';
  console.log(fruta);
}

function lavar() {
  var fruta = 'fresa';
  console.log(fruta);
}

