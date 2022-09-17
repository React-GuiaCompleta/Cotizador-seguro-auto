import useCotizador from "./hooks/useCotizador"

const Resultado = () => {
    const { resultado } = useCotizador()
    // para quitar el 0 debajo 
    if (resultado === 0) return null
    return (
        <div>{resultado}</div>
    )
}

export default Resultado

