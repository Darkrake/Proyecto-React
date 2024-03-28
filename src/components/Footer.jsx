export default function Footer(){
    return (
    <footer className="boder-t py-4 px-3 flex justify-center bg-gray-200 shadow-sm">
        <p>
            Derechos de autor &copy; {new Date().getFullYear()} ZoriPro
        </p>
    </footer>
    )
}