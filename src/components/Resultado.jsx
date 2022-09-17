import useCotizador from "./hooks/useCotizador"
// 2 import
import { MARCAS, PLANES } from "./constants"

const Resultado = () => {
    // 1 extraer los datos 
    const { resultado, datos } = useCotizador()
    // 3
    const { marca, plan, year } = datos

    // 4 Filtra por el id no en base a la posición
    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
    // 7
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan))
    // para quitar el 0 debajo 
    if (resultado === 0) return null
    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xxl">
                Resumen
            </h2>
            {/* my margen */}
            <p className="my-2 ">
                <span className="font-bold">Marca: </span>
                {/* 5 */}
                {nombreMarca.nombre}
            </p>

            {/* 6 */}
            <p className="my-2 ">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>

            <p className="my-2 ">
                <span className="font-bold">Año: </span>
                {year}
            </p>

            <p className="my-2 text-2xl ">
                <span className="font-bold">Total cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado

