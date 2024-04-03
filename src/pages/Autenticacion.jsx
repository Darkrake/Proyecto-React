import Home from "./Home"
import { useAccount } from "wagmi"

export default function Autenticacion() {
  const { address, isConnecting, isDisconnected } = useAccount();
  <section>
    <Home />
  </section>

  if (isConnecting)
    return (
      <div className="bg-gradient-to-r from-green-400 to-green-100 text-right">
        Cargando...
      </div>
    );

  if (isDisconnected)
    return (
      <div className="px-7 bg-gradient-to-r from-green-400 to-green-100  text-yellow-400 text-right">
        Desconectado{" "}
      </div>
    );
  return (
    <div className="flex flex-col bg-gradient-to-r from-green-50 to-emerald-200 font-semibold text-green-500 text-right">
      <p className="md:hidden text-xs">Conectado: {address}</p>
      <p className="hidden md:block">Conectado a la Wallet: {address} </p>
    </div>
  )
}