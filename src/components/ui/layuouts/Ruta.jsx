import { Route, Routes } from "react-router-dom";
import { Autenticacion, GestionUsuarios, OperacionesPrestamos,} from "../../../pages";
import { Home } from "../../../pages";

export default function Ruta() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Autenticacion />} />
      <Route path="usuarios" element={<GestionUsuarios />} />
      <Route path="prestamos" element={<OperacionesPrestamos />} />
    </Routes>
  )
}