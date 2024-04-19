import { ABIZoriPro } from '../contracts/ABI/ABIZoriPro'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { TextInput, Titulo, Boton } from './ui'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
export default function AprobarPrestamo() {
    const [cliente, setCliente] = useState('')
    const [prestamoId, setPrestamoId] = useState('')

    const { config } = usePrepareContractWrite({
        address: import.meta.env.VITE_ZoriProPrestamoDefi,
        abi: ABIZoriPro,
        functionName: 'solicitarPrestamos',
        enabled: cliente > 0,
        args: [cliente, prestamoId]
    });
    const handleClienteChange = (event) => {
        setCliente(event.target.value);
    };
    const handlePrestamoIdChange = (event) => {
        setPrestamoId(event.target.value);
    };
    const { data: writeData, write } = useContractWrite(config)
    const {
        isError: isAprobarPrestamoError,
        isLoading: isAprobarPrestamoLoading,
        isSuccess: isAprobarPrestamoSuccess,
    } = useWaitForTransaction({
        hash: writeData?.hash,
    });
    useEffect(() => {
        if (isAprobarPrestamoSuccess) {
            toast.success('Préstamo aprobado con éxito')
            setCliente('')
            setPrestamoId('')
        }

        if (isAprobarPrestamoError) {
            toast.error('Error al aprobar el préstamo')
        }
    } , [isAprobarPrestamoSuccess, isAprobarPrestamoError])

    return (
         <section className="grid gap-1">
            <Titulo>Aprobar Prestamo</Titulo>
            <form className="grid gap-1 border-2 rounded-lg">
              <div className="grid gap-1 p-1">
                <TextInput  
                    type="texto"       
                    label="DireccionCliente" 
                    placeholder="Introduce direccion del Solicitante"
                    onChange={handleClienteChange}
                    value={cliente}
                />
                 <TextInput 
                    label="IdPrestamo" 
                    onChange={handlePrestamoIdChange}
                    placeholder="id prestamo" 
                    type="number"
                    value={prestamoId}
                />   
                </div>  
                <div className="grid p-1 ">   
                  <Boton 
                    onClick={() => write?.()} 
                    disabled={!cliente || !prestamoId || isAprobarPrestamoLoading}
                    isLoading={isAprobarPrestamoLoading}
                  >
                  {isAprobarPrestamoLoading ? "Solicitando Prestamo..." : "Solicitar Prestamo"}
                  </Boton>
                </div>
            </form>
        </section>
    );

}