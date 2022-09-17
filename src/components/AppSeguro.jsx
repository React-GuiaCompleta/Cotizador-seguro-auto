import Formulario from "./Formulario"
import useCotizador from "./hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {
    const { resultado, cargando } = useCotizador()
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-ceter text-4xl font-black">Cotizador de seguro de auto</h1>
            </header>
            {/* media query width de 2/3 partes, mx-auto para que esté centrado p-10 en todas las direcciones */}
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />
                {/* {resultado} */}
                {/* Si cargando está true entonces muestra cargando, si está false muestra resultado */}
                {/* {cargando ? 'Cargando...' : resultado} */}
                {cargando ? <Spinner /> : <Resultado />}
            </main>
        </>
    )
}

export default AppSeguro

