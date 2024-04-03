import { Titulo, TextInput, Boton } from "./ui";

export default function PrestamosClientes() {
  return (
    <section className="grid gap-3">
      <Titulo>Consulta tus Prestamos</Titulo>

      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput />
          <Boton>Consultar Prestamos</Boton>
        </div>
      </form>
    </section>
  )
}