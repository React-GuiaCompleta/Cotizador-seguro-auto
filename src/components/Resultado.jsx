// 1
import { useCallback, useMemo, useRef } from "react"
import useCotizador from "./hooks/useCotizador"
import { MARCAS, PLANES } from "./constants"

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    // Filtra por el id, no en base a la posición
    // 2 Queremos evitar el Re render en la marca y el plan
    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(marca)),
        [resultado])
    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)),
        [resultado])
    // 3 congela el primer valor, o el escogido luego 
    // de dar click en cotizar, así seleccionemos otros años, 
    // los seleccionados se guardan en el estado y si cambian allí
    const yearRef = useRef(year)
    console.log("year:", year);
    console.log("yearRef:", yearRef);

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
                {nombreMarca.nombre}
            </p>

            <p className="my-2 ">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>

            <p className="my-2 ">
                <span className="font-bold">Año: </span>
                {/* 4 */}
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl ">
                <span className="font-bold">Total cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado

