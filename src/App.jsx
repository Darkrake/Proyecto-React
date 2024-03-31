import { AppLayout } from './components/ui/layuouts'
import { Home } from './pages'
import { WagmiConfig } from "wagmi"
import { ConnectKitProvider } from "connectkit"
import { config } from './components/config/wagmi'



function App() {
  
  return(
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <Home/> 
        </AppLayout>   
      </ConnectKitProvider>
    </WagmiConfig> 
  )
}

export default App
