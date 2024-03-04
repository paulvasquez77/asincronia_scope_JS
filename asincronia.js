console.log("hola");

const primerLlamado = () => {
  return "primer llamado"
}
const segundoLlamado = () => {
  return "segundo llamado"
}
const tercerLlamado = () => {
  return "tercer llamado"
}

console.log(primerLlamado());

setTimeout(() => {
  console.log(segundoLlamado());
}, 2000);

console.log(tercerLlamado());


//async await
const myCall = async () => {
  try {
    const data = await fetch('https://rickandmortyapi.com/api/character')
    const formatedData = await data.json()
    console.log(formatedData?.results);
  } catch (error) {
    console.error(error);
  }
}

myCall()
