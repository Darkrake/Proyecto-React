
import { ConnectKitButton } from "connectkit"

export default function Header(){
    return (
    <header className="border-b shadow-sm py-2  flex justify-between items-center" > 
        <img src="./public/billetes-grande.png" alt="ZoriPro-mobile-logo" className="sm:hidden" width={45}/>
        <img src="./public/billetes-grande.png" alt="ZoriPro-desktop-logo" className="hidden sm:block" width={120}/>
        <ConnectKitButton />
       
    </header>
    )
}