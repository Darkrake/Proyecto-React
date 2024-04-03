import { AppLayout, Ruta } from "./components/ui/layuouts"
import { WagmiConfig } from "wagmi"
import { ConnectKitProvider } from "connectkit"
import { config } from "./components/config"
import { Autenticacion } from "./pages"
export default function App() {  
  return(    
      <WagmiConfig config={config}>
          <ConnectKitProvider>
          <AppLayout>
            <Autenticacion />
            <Ruta/>
          </AppLayout>   
        </ConnectKitProvider>
      </WagmiConfig>    
  )
}

