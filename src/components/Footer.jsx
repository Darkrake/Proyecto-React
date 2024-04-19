export default function Footer(){
    return (
    <footer className="boder-t text-bold  py-3 px-3 flex justify-center sm-640 bg-gray-200 shadow-sm">
        <p>
            Derechos de autor &copy; {new Date().getFullYear()} ZoriPro
        </p>
    </footer>
    )
}