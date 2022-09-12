import useCotizador from "./hooks/useCotizador"

const Error = () => {
    // extraigo el error porque estará en
    // el state global
    const { error } = useCotizador()
    return (
        <div className="border text-center border-red-400 bg-red-100 
        py-3 text-red-700" >
            <p>{error}</p>
        </div>
    )
}

export default Error