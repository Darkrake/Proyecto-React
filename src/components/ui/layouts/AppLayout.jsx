import {Header, Footer,Navbar} from "../../index"
import PropTypes from 'prop-types'
export default function AppLayout({children}){
    return(
        <>
            <Header/>
                <main className="min-h-[80vh]">{children}</main>
                <div className="bg-gradient-to-r from-green-500 to-green-400 py-2 px-2 content-end border-b shadow-sm sm:hidden"><Navbar/></div>
            <Footer/>
        </>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
