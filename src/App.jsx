import AppSeguro from "./components/AppSeguro"
import { CotizadorProvider } from "./components/context/CotizadorProvider"

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App


