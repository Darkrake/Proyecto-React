
export default function Header(){
    return (
    <header className="bg-green-400 text-3xl underline py-2"> 
        <img src="./public/billetes-grande.png" alt="ZoriPro-mobile-logo" className="sm:hidden" width={45}/>
        <img src="./public/billetes-grande.png" alt="ZoriPro-desktop-logo" className="hidden sm:block" width={120}/>
    </header>
    )
}