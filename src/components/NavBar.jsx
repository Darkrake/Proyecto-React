import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
  
      <nav className="flex items-center justify-between bg-gray-200 p-4">
          <Link to="../pages/InicioYAutenticacion" className="text-blue-900 font-bold mr-4">Autenticación</Link>
          <Link to="../pages/AltaPrestamista.jsx" className="text-blue-900 font-bold mr-4">Alta Prestamista</Link>
          <Link to="../pages/GestionUsuarios" className="text-blue-900 font-bold mr-4">Gestión de Usuarios</Link>
          <Link to="../pages/OperacionesPrestamos" className="text-blue-900 font-bold">Operaciones de Préstamos</Link>
      </nav>
  
  )
}
