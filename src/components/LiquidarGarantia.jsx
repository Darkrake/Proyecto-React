import { Titulo, TextInput, Boton } from "./ui"
import { ABIZoriPro } from "../contracts/ABI/ABIZoriPro"
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi"
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast"

export default function LiquidarGarantia() {

  const [cliente, setcliente] = useState("")
  const [prestamoId, setPrestamoId]= useState("")
  const {config} = usePrepareContractWrite({
    address : import.meta.env.ITE_ZoriProPrestamoDefi,
    abi : ABIZoriPro,
    functionName : "liquidarGarantia",
    enabled : cliente > 0,
    args: [ cliente, prestamoId]
  })
  const handleClienteChange = ( event ) => {
    setcliente(event.target.value);
  };
  const { data: writeData, write}= useContractWrite(config)
  const {
    isError: isLiquidarError,
    isLoading: isLiquidarLoading,
    isSuccess: isLiquidarSuccess,
  } = useWaitForTransaction({hash:writeData?.hash});
  useEffect(()=>{
    if(isLiquidarSuccess){
      toast.success("Garantia liquidada correctamente")
      setcliente("")
      setPrestamoId("")
    }
    if (isLiquidarError){
      toast.error("No se ha podido liquidar la garantía")
    }
  },[isLiquidarSuccess, isLiquidarError]);

    <section className="grid gap-1" >
      <Titulo>Liquidar Garantia</Titulo>

      <form className="grid gap-1 border-2 rounded-lg" action="">
        <div className="grid gap-1 p-1">
          <TextInput
            type="texto"
            label ="addressCliente"
            onChange={handleClienteChange}
            placeholder="Introduce dirección del Prestatario "
            value={cliente}
          />
          <TextInput
            label="idPrestamo"
            onChange={handleClienteChange}
            type="number"
            placeholder="Introduce el ID del PrEstamo"
            value={prestamoId}
          />
        </div>
        <div className="grid p-1">
          <Boton
            onClick={()=>write?.()}
            disabled={!cliente || !prestamoId || isLiquidarLoading}
            isLoading={isLiquidarLoading? "Esperando Id..." : "Introduzca Prestamo ID"}                       
            >Liquidar Garantia</Boton>
        </div>
      </form>
    </section>  
}