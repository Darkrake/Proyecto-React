
export default function Header(){
    return (
    <header className="border-b shadow-sm py-2  flex justify-between items-center" > 
        <img src="./public/billetes-grande.png" alt="ZoriPro-mobile-logo" className="sm:hidden" width={45}/>
        <img src="./public/billetes-grande.png" alt="ZoriPro-desktop-logo" className="hidden sm:block" width={120}/>
        <button className="bg-pink-300 rounded-xl px-2 py-2 text-s h-fit">Connect Wallet</button>
    </header>
    )
}