import { createContext } from "react";
import { useState } from "react";
// 5 obteneDiferenciaYear 8 importamos calcularMarca 11 calcularPlan
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../../helpers";
// El context es CotizadorContext = funcion que importamos
const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    // 15 
    const [resultado, setResultado] = useState(0)
    // Funcion que actualiza el state, toma el evento e
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            // crea un array para mostrar la info del nombre
            [e.target.name]: e.target.value
        })
    }
    // 1
    const cotizadorSeguro = () => {
        // 3 
        let resultado = 2000
        //6
        console.log("Año escogido", datos.year);
        console.log("La marca escogida es", datos.marca);
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        console.log("diferencia", diferencia);
        // restar el 3% cada año, -= resta sobre la base que es 2000
        // osea resultado = resultado - ()
        // ejemplo: ((2022 - 2011) * 3 ) * 2000 / 100
        resultado -= ((diferencia * 3) * resultado) / 100
        console.log("resultado con diferencia y porcentaje", resultado);
        // 9 
        resultado *= calcularMarca(datos.marca)
        console.log("resultado con diferencia, porcentaje y marca", resultado);
        // 12 
        resultado *= calcularPlan(datos.plan)
        // coloca solo 2 decimales
        // resultado = resultado.toFixed(2)
        // 14 formatear dinero
        resultado = formatearDinero(resultado)
        console.log("resultado con diferencia, porcentaje, marca y plan", resultado);
        // 16
        setResultado(resultado)
    }

    return (
        < CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                // 1.1
                cotizadorSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider >
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext