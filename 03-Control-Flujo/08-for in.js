//iterar las propiedad de un objeto

let user = {
  id: 1,
  name: "chanchito feliz",
  age: 24,
};
for (let prop in user) {
  console.log(prop, user[prop]);
}
let animales = ["chanchito feliz", "dragon", "canguro"];
for (let indice in animales) {
  console.log(indice, animales[indice]);
}
