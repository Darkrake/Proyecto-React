import { Titulo, TextInput, Boton } from "./ui"
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ABIZoriPro } from "../contracts/ABI/ABIZoriPro"
import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
export default function ReembolsarPrestamo() {
  const[idPrestamo, setIdPrestamo]=useState("")
  const { config } = usePrepareContractWrite({
    addess: import.meta.env.VITE_ZoriProPrestamoDefi,
    abi:ABIZoriPro,
    functionName: "reembolsarPrestamo",
    enabled: idPrestamo>0,
    args:[idPrestamo],
  })
  const handelIdPrestamoChange = (event) =>{
    setIdPrestamo(event.target.value)
  }
  const {data:writeData, write}= useContractWrite(config)
  const {
    isError: isReembolsoError,
    isLoading: isReembolsoLoading,
    isSuccess: isReembolsoSuccess,
  }= useWaitForTransaction({
    hash:writeData?.hash,
  })
  useEffect(()=>{
    if (isReembolsoSuccess){
      toast.success("Se ha procedido al reembolso")
      setIdPrestamo("")
    } 
    if (isReembolsoError) {
      toast.error("No se ha podido hacer el reembolso")
    }     
  }, [isReembolsoError,isReembolsoSuccess])

  return (
    <section className="grid gap-1">
      <Titulo>Reembolsar Prestamo</Titulo>
      <form className="grid gap-1">
        <div className="grid gap-1 border-2 rounded-lg p-1">
          <TextInput type="number" placeholder="ID del Préstamo a Reembolsar"/>
            label="garantia"
            onChange={handelIdPrestamoChange}
            placeholder="id prestamo"
            type="number"
            value={idPrestamo}
          <Boton 
            onclick={()=> write?.()}
            disablee={!idPrestamo || isReembolsoLoading}
            isLoading={isReembolsoLoading}
            >{isReembolsoLoading? "Reembolsando Garantia": "Depositar Garantia"}
            </Boton>
        </div>
      </form>
    </section>
  )
}