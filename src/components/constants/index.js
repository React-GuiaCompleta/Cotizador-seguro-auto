// europeo incrementa el costo 30%
// americano incrementa el costo 15%
// asiatico incrementa el costo 5%
export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

const YEARMAX = new Date().getFullYear();
// Array.from convierte lo que tengamos en un arreglo
// new Array(20) crea un arreglo con 20 elementos
export const YEARS = Array.from(
  new Array(20),
  // , definimos una funcion, indice es 01,02,03
  (valor, index) => YEARMAX - index
);

// basico 20%
// completo 50%
export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },
];

