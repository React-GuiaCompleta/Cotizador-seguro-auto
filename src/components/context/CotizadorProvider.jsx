import { createContext } from "react";
import { useState } from "react";
// El context es CotizadorContext = funcion que importamos
const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
    // 7
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    // 1 Funcion que actualiza el state, toma el evento e
    const handleChangeDatos = e => {
        // 8
        setDatos({
            ...datos,
            // crea un array para mostrar la info del nombre
            [e.target.name]: e.target.value
        })
    }

    return (
        < CotizadorContext.Provider
            value={{
                // 9
                datos,
                //
                handleChangeDatos,
                error,
                setError
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