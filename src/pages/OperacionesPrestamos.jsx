import {  SolicitarPrestamo, ReembolsarPrestamo, PrestamosClientes, AprobarPrestamo, DepositarGarantia,LiquidarGarantia} from "../components"
export default function OperacionesPrestamos() {
  return (
    <div>
      <div className="text-5xl p-5 gap-6 font-thin text-center text-green-700">
        <h2>Operaciones con Prestamos</h2>
        <hr />
      </div>

      <div className="flex justify-center gap-12 h-[80vh]">
        {/*Clientes*/}
        <div>
          <section className="grid gap-10 place-items-center">
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <SolicitarPrestamo />
            </div>
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <DepositarGarantia />
            </div>
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <ReembolsarPrestamo />
            </div>
          </section>
        </div>
        {/*EmpleadoPrestamista*/}
        <div>
          <section className="grid gap-10 items-center">
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <AprobarPrestamo />
            </div>
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <LiquidarGarantia />
            </div>
            <div className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
              <PrestamosClientes />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}