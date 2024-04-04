import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav >
      <ul className="flex justify-center">
        <li className="p-1">
          <Link to="/" className="hidden lg:block">
            <button className="border-s px-2">Autenticacion</button>
          </Link>
          <Link to="/" className="lg:hidden">
            <button className="border-s px-2">Autenticacion</button>
          </Link>
        </li>
        <li className="py-1">
          <Link to="/gestion-usuarios" className="hidden lg:block">
            <button className="border-s px-2 ">Gestion de Usuarios</button>
          </Link>
          <Link to="/gestion-usuarios" className="lg:hidden">
            <button className="border-s px-2 ">Usuarios</button>
          </Link>
        </li>
        <li className="py-1">
          <Link to="/operaciones-prestamos" className="hidden lg:block">
            <button className="px-2 ">Operaciones con Prestamos</button>
          </Link>
          <Link to="/operaciones-prestamos" className="lg:hidden">
            <button className="px-2 ">Prestamos</button>
          </Link>
        </li>
      </ul>
    </nav>    
  )
}