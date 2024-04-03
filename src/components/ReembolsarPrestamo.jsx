import { Titulo, TextInput, Boton } from "./ui"

export default function ReembolsarPrestamo() {
  return (
    <section className="grid gap-3">
      <Titulo>Reembolsar Prestamo</Titulo>
      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput type="number" placeholder="Indica el ID del Préstamo a Reembolsar"/>
          <Boton>Reembolsar Prestamo</Boton>
        </div>
      </form>
    </section>
  )
}