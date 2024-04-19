
import { ConnectKitButton } from "connectkit"
import {Navbar} from '../components'

export default function Header(){
    return (
    <header className="border-b shadow-sm p-1 flex justify-between items-center" > 
        <img src="./billetes-grande.png" alt="ZoriPro-mobile-logo" className="sm:hidden" width={25}/>
        <img src="./billetes-grande.png" alt="ZoriPro-desktop-logo" className="hidden sm:block" width={45}/>
        <Navbar/>
        <ConnectKitButton />
       
    </header>
    )
}
