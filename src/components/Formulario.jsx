import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "./constants";
import useCotizador from "./hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
    // ya que handleChangeDatos es un objeto importamos 
    // la funcion handleChangeDatos = y manda a llamar
    // al hook y lea los datos del context y nos retorne
    // esa funcion 
    // importamos cotizadorSeguro
    const { handleChangeDatos, datos, error, setError, cotizadorSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()
        // Revisa los valores de un objeto
        // si datos tiene un valor vacio que diga error
        if (Object.values(datos).includes('')) {
            // console.error('error, campos obligatorios')
            setError('Todos los campos son obligatorios')
            return
        }
        // Sino limpiamos quitamos la alerta
        setError('')
        //la mandamos a llamar
        cotizadorSeguro()
    }
    return (
        <>
            {/* en caso de que error tenga algo entonces muestre el componente */}
            {error && <Error />}
            <form
                onSubmit={handleSubmit}
            >
                {/* margin separa el campo actual con los que vienen mas abajo */}
                <div className="my-5">
                    {/* Block toma todo el ancho de pantalla */}
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Selecciona marca --</option>
                        {/* Iteramos MARCAS para poder extraer las marcas y que se muestren
                        se guardan en la variable marca */}
                        {MARCAS.map((marca) => (
                            <option
                                key={marca.id}
                                // Se almacena en el state
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value="">-- Selecciona año --</option>
                        {YEARS.map((year) => (
                            <option key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un plan
                    </label>
                    {/* gap-3 para que se separe */}
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white 
                    cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario;

