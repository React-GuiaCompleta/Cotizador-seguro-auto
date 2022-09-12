import Formulario from "./Formulario"

const AppSeguro = () => {
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de seguro de auto</h1>
            </header>
            {/* media query width de 2/3 partes, mx-auto para que esté centrado p-10 en todas las direcciones */}
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />
            </main>
        </>
    )
}

export default AppSeguro

