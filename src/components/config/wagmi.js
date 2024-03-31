import { createConfig } from "wagmi"
import { getDefaultConfig } from "connectkit"
import {sepolia} from "wagmi/chains"

export const config = createConfig(
  getDefaultConfig({
    
    alchemyId: import.meta.env.VITE_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "ZoriPro-react",  
    chains:[sepolia] 
  })
)
