import { Titulo, TextInput, Boton } from "./ui"
import {ABIZoriPro} from "../contracts/ABI/ABIZoriPro"
import{useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi"
import {toast} from "react-hot-toast"
import{useState,useEffect} from  "react"
export default function DepositarGarantia(){
  
  const[saldoGarantia, setSaldoGarantia] =useState("");
  const{config}=usePrepareContractWrite({
    address: import.meta.env.VITE_ZoriProPrestamosDefi,
    abi: ABIZoriPro,
    functionName: "depositarGarantia",
    args: [],  
    value:saldoGarantia,
  });

  const{data,write}=useContractWrite(config);
  const {
    isLoading: IsGarantiaLoading,
    isSuccess: isGarantiaSuccess,
    isError: isGarantiaError,
  }=useWaitForTransaction({
    hash:data?.hash,
  });
  const handleSaldoGarantiaInputChange=(event)=>{
    setSaldoGarantia(event.target.value);
  };
  useEffect(()=>{
    if(isGarantiaSuccess){
      toast.success("La garantía se depositado correctamente");
      setSaldoGarantia("");
    }
    if (isGarantiaError){
      toast.error("Error al depositar la garantía");
    }
},
[isGarantiaSuccess,isGarantiaError]);
return(
  
  <section className="grid gap-1">          
      <Titulo>Depositar Garantia</Titulo>
      <form className="grid gap-1">
        <div className="grid gap-1 border-1 rounded-lg p-1">
          <TextInput
            type="number"
            placeholder="Indica el saldo a depositar (debe ser el total solicitado)"
            label="saldoGarantia"
            value={saldoGarantia}
            onChange={handleSaldoGarantiaInputChange}
          />
          <Boton 
            disable={!saldoGarantia || IsGarantiaLoading}
            isLoading={IsGarantiaLoading}
            onClick={()=>write?.()}
          >
              {IsGarantiaLoading 
              ? "Transfiriendo"
              : "Deposita el saldo para Garantia"}
          </Boton>
        </div>
      </form>
    </section>
  )
}