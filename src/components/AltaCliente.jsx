import { Titulo, TextInput, Boton } from "./ui"
import { ABIZoriPro } from "../contracts/ABI/ABIZoriPro"
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi"
import { useState, useEffect } from "react"
import { toast } from 'react-hot-toast'

export default function AltaCliente() {
  const [addressCliente, setAddressCliente] = useState("")
  const { address } = useAccount()
  const { data } = useContractRead({
    address: import.meta.env.VITE_ZoriProPrestamoDefi,
    abi: ABIZoriPro,
    functionName: "altaCliente",
    })
    console.log(data)
  
  const isLenderEmployee = address === data
  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_ZoriProPrestamoDefi,
    abi: ABIZoriPro,
    functionName: "altaCliente",
    enabled: addressCliente,
    args: [addressCliente],   
  }) 
 
  console.log(address)
  const { data: writeData, write } = useContractWrite(config)
  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: writeData?.hash  
  })

  const handleAddressClienteInputChange = (event) => {
    setAddressCliente(event.target.value)
  }
 
  useEffect(() => {
    if (isTransactionSuccess) {      
      setAddressCliente("")
      toast.success("Cliente dado de alta con éxito")
      console.log(isTransactionSuccess)
    }
    if (isTransactionError) {
      toast.error("Error: La transacción ha fallado")
      console.log(isTransactionError)
    }
  }, [isTransactionSuccess, isTransactionError])
  
  return (
    <section className="grid gap-3 px-5 bg-white p-4 border shadow rounded-lg text-sm w-fit">
      <Titulo>Alta Cliente</Titulo>
      <form action="">
        <TextInput 
          type="text" 
          placeholder="Address Nuevo Cliente"
          label="nuevoCliente"
          value={addressCliente}          
          disabled={!isLenderEmployee || isTransactionLoading}
          onChange={handleAddressClienteInputChange}
        />   
        </form>     
        <Boton
          disabled={!addressCliente || !isLenderEmployee || isTransactionLoading}
          isLoading={isTransactionLoading}
          onClick={() => write?.()}
        >
          {isLenderEmployee
          ? isTransactionLoading
            ? "Tramitando Alta Nuevo Cliente"
            : "Alta Cliente"
            : "Operacion reservada a los Empleados Prestamistas"}
        </Boton>
            
    </section>
  )
}