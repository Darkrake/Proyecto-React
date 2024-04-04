import { Route, Routes } from "react-router-dom"
import { Autenticacion, GestionUsuarios, OperacionesPrestamos} from "../components"
import { Home } from "../pages"
export default function AppRouter() {
  return (
    <Routes>
      <Route index component={Home} />
      <Route path="/" component={Autenticacion } />
      <Route path="/gestion-usuarios" component={GestionUsuarios} />
      <Route path="/operaciones-prestamos" component={OperacionesPrestamos } />
    </Routes>
  )
}