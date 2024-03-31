import { useAccount } from "wagmi"
import { IndicadorCarga } from "../../components/ui";

export default function Home(){
    const { address, isConnecting, isDisconnected } = useAccount();
    if (isConnecting) return <div>Connecting...</div>
    if (isDisconnected) return <div>Disconnected</div>
    
    return(
        <div>
            <div className="flex flex-col">Connected Wallet: {address}</div>
            <IndicadorCarga className="h-10 w-10" />
        </div>
    )

}