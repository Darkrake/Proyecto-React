import {  SolicitarPrestamo, ReembolsarPrestamo, PrestamosCliente, AprobarPrestamo, DepositarGarantia,LiquidarGarantia} from "../components"
export default function OperacionesPrestamos() {
  return (
    <div>
      <div className="text-2xl text-bold p-1 gap-1  text-center text-green-700">
        <h2>Operaciones con Prestamos</h2>
        <hr />
      </div>
      <div className="flex justify-center gap-8  h-[80vh]">
        {/*Clientes*/}
        <div >
          <section className="grid gap-1  place-items-center">
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <SolicitarPrestamo />
            </div>
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <DepositarGarantia />
            </div>
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <ReembolsarPrestamo />
            </div>
          </section>
        </div>
        {/*EmpleadoPrestamista*/}
        <div >
          <section className="grid gap-1 columns-3  items-center">
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <AprobarPrestamo />
            </div>
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <LiquidarGarantia />
            </div>
            <div className="grid gap-1 px-3 bg-white p-2 border shadow rounded-lg text-sm w-fit">
              <PrestamosCliente />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}