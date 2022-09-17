import { createContext } from "react";
import { useState } from "react";
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
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    // Funcion que actualiza el state, toma el evento e
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            // crea un array para mostrar la info del nombre
            [e.target.name]: e.target.value
        })
    }
    const cotizadorSeguro = () => {
        let resultado = 2000
        console.log("Año escogido", datos.year);
        console.log("La marca escogida es", datos.marca);
        const diferencia = obtenerDiferenciaYear(datos.year)
        console.log("diferencia", diferencia);
        // restar el 3% cada año, -= resta sobre la base que es 2000
        // osea resultado = resultado - ()
        resultado -= ((diferencia * 3) * resultado) / 100
        console.log("resultado con diferencia y porcentaje", resultado);
        resultado *= calcularMarca(datos.marca)
        console.log("resultado con diferencia, porcentaje y marca", resultado);
        resultado *= calcularPlan(datos.plan)
        // coloca solo 2 decimales
        // resultado = resultado.toFixed(2)
        // o tambien podemos formatear dinero
        resultado = formatearDinero(resultado)
        console.log("resultado con diferencia, porcentaje, marca y plan", resultado);
        // si cargando está true muestre el mensaje cargando...
        setCargando(true)
        // despues de 3 segundos coloque el resultado en el state
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }

    return (
        < CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizadorSeguro,
                resultado,
                cargando
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

