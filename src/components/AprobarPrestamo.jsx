import { Titulo, TextInput, Boton } from "./ui";

export default function AprobarPrestamo() {
  return (
    <section className="grid gap-3">
      <Titulo>Aprobar Prestamo</Titulo>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce direccion del Solicitante"
          />
          <TextInput
            type="number"
            placeholder="Indica el Monto en Ether Aprobado"
          />
        </div>
        <div className="grid p-2 ">
          <Boton>Aprobar Prestamo</Boton>
        </div>
      </form>
    </section>
  );
}