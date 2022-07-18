import Footer from "../components/Footer"
import Header from "../components/Header"


type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (<>
    <Header/>
        <div className='main'>
            {children}
        </div>
        <Footer/>
    </>
    )
}

export default Layout
