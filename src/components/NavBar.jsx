import { Link } from "react-router-dom";

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
          <Link to="/GestionUsuarios" className="hidden lg:block">
            <button className="border-s px-2 ">Gestion de Usuarios</button>
          </Link>
          <Link to="/GestionUsuarios" className="lg:hidden">
            <button className="border-s px-2 ">Usuarios</button>
          </Link>
        </li>
        <li className="py-1">
          <Link to="/OperacionesPrestamos" className="hidden lg:block">
            <button className="px-2 ">Operaciones de Prestamos</button>
          </Link>
          <Link to="/OperacionesPrestamos" className="lg:hidden">
            <button className="px-2 ">Prestamos</button>
          </Link>
        </li>
      </ul>
    </nav>    
  )
}