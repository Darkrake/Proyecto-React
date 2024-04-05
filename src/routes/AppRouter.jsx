import { Route, Routes } from "react-router-dom"
import { Autenticacion, GestionUsuarios, OperacionesPrestamos,Home} from "../pages/index"

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/" element={<Autenticacion/> } />
      <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
      <Route path="/operaciones-prestamos" element={<OperacionesPrestamos/> } />
    </Routes>
  )
}