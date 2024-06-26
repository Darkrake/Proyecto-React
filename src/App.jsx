import { AppLayout } from "./components/ui/layouts"
import  AppRouter  from "./routes/AppRouter"
import { WagmiConfig } from "wagmi"
import { ConnectKitProvider } from "connectkit"
import { config } from "./config/wagmi"
import { Autenticacion } from "./pages"
import { Toaster } from "react-hot-toast";

export default function App() {  
  return(    
      <WagmiConfig config={config}>
          <Toaster position="bottom-center  " />
          <ConnectKitProvider>
          <AppLayout>
            <Autenticacion />
            <AppRouter/>
          </AppLayout>   
        </ConnectKitProvider>
      </WagmiConfig>    
  )
}

