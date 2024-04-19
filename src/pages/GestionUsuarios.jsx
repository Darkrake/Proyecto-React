import { AltaPrestamista, AltaCliente } from "../components"

export default function GestionUsuarios() {
  return (
    <div>
      <div className="text-3xl text-bold pt-5 font-thin text-center text-green-700">
        <h3>Gestion de Usuarios</h3>
        <hr />
      </div>
      <section className="flex flex-col pt-5 gap-8 items-center">
        <div>
          <AltaPrestamista />
        </div>
        <div>
          <AltaCliente />
        </div>
      </section>
    </div>
  )
}