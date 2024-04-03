import { Titulo, TextInput, Boton } from "./ui";

export default function LiquidarGarantia() {
  return (
    <section className="grid gap-3">
      <Titulo>Liquidar Garantia</Titulo>

      <form className="grid gap-1 border-2 rounded-lg">
        <div className="grid gap-3 p-2">
          <TextInput
            type="texto"
            placeholder="Introduce dirección del Prestatario "
          />
          <TextInput
            type="number"
            placeholder="Introduce el ID del Préstamo"
          />
        </div>
        <div className="grid p-2">
          <Boton>Liquidar Garantia</Boton>
        </div>
      </form>
    </section>
  );
}