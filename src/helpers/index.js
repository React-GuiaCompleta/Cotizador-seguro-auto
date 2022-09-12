// 2 Creamos index.js en una nueva carpeta helpers en src
// lo dejamos vacio
// 4
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// 7 marca va a ser el state en datos marca:'' y las
// marcas tiene sus id
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

// 10
export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

// 13
export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}