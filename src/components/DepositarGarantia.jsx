import { Titulo, TextInput, Boton } from "./ui";
export default function DepositarGarantia(){
  <section className="grid gap-3">
      <Titulo>Depositar GarantIa</Titulo>

      <form className="grid gap-3">
        <div className="grid gap-3 border-2 rounded-lg p-2">
          <TextInput
            type="number"
            placeholder="Indica el ID del Préstamo a Reembolsar"
          />
          <Boton>Depositar GarantIa</Boton>
        </div>
      </form>
    </section>
}