import { Route, Routes } from "react-router-dom";
import { Autenticacion, GestionUsuarios, OperacionesPrestamos} from "../../../pages";
import { Home } from "../../../pages";

export default function Ruta() {
  return (
    <Routes>
      <Route index component={Home} />
      <Route path="/" component={Autenticacion } />
      <Route path="/gestion-usuarios" component={GestionUsuarios} />
      <Route path="/operaciones-prestamos" component={OperacionesPrestamos } />
    </Routes>
  )
}